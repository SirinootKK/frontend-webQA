/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

interface ChatBoxProps {
  messages: { type: string; content: any }[];
  onSubmit: (message: string) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages, onSubmit }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="h-full w-full">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="h-4/5 w-10/12 bg-white shadow-lg p-10 mb-5 rounded-2xl">
          <div className="flex-auto overflow-auto h-full">
            <div className="flex flex-col px-20 py-5 overflow-auto vertical-scrollbar">
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  type={message.type}
                  content={message.content}
                />
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
        <div className="w-4/6">
          <ChatInput onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
