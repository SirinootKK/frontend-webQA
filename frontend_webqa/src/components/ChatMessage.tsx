import React from "react";

interface ChatMessageProps {
  type: string;
  content: string | React.ReactNode;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ type, content }) => {
  return (
    <div
      className={` ${type === "bot" ? "text-left py-1" : "text-right py-5"}`}
    >
      <div
        className={`px-5 py-3 ${
          type === "bot"
            ? "bg-gray-200 hover:bg-green-200 rounded-t-xl rounded-br-xl"
            : "bg-blue-500 text-white rounded-t-xl rounded-bl-xl"
        } inline-block overflow-y-auto `}
      >
        {type === "bot" ? (
          content
        ) : (
          <span className="whitespace-pre-wrap">{content}</span>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
