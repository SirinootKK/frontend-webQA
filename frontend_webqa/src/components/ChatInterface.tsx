/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { getResponseWebQA } from "../services/apiService";
import ChatBox from "./ChatBox";

const ChatInterface: React.FC = () => {
  const [responses, setResponses] = useState<
    { type: string; content: React.ReactNode }[]
  >([]);

  const handleSubmit = async (message: string) => {
    try {
      const data = await getResponseWebQA(message);
      if (Array.isArray(data) && data.length > 0) {
        const formattedResponses = data
          .filter((item: any) => item.text && item.url)
          .map((item: any) => ({
            type: "bot",
            content: <a href={item.url}>{item.text}</a>,
          }));
        const userMessage = { type: "user", content: message };
        setResponses([...responses, userMessage, ...formattedResponses]);
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
