/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { getResponseWebQA } from "../services/apiService";
import ChatBox from "./ChatBox";

const ChatInterface: React.FC = () => {
  const storedResponses = localStorage.getItem("chatResponses");
  const initialResponses = storedResponses ? JSON.parse(storedResponses) : [];

  const [responses, setResponses] =
    useState<{ type: string; content: any }[]>(initialResponses);

  useEffect(() => {
    const storedResponses = localStorage.getItem("chatResponses");
    const initialResponses = storedResponses ? JSON.parse(storedResponses) : [];

    setResponses(initialResponses);
  }, []);

  const handleSubmit = async (message: string) => {
    try {
      const data = await getResponseWebQA(message);
      if (Array.isArray(data) && data.length > 0) {
        const formattedResponses = data
          .filter((item: any) => item.text && item.url)
          .map((item: any) => ({
            type: "bot",
            content: {
              text: item.text,
              href: item.url,
            },
          }));
        const userMessage = { type: "user", content: message };
        const updatedResponses = [
          ...responses,
          userMessage,
          ...formattedResponses,
        ];
        setResponses(updatedResponses);
        localStorage.setItem("chatResponses", JSON.stringify(updatedResponses));
      } else {
        console.error("Invalid response data:", data);
      }
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div>
      <ChatBox messages={responses} onSubmit={handleSubmit} />
    </div>
  );
};

export default ChatInterface;
