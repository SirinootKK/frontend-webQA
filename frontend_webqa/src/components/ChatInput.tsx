import React, { useState } from "react";
import { ArrowGreen, ArrowDeepBlue } from "../../public/images/index.ts";

interface ChatInputProps {
  onSubmit: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmit }) => {
  const [message, setMessage] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim() !== "") {
      onSubmit(message);
      setMessage("");
    }
  };

  const examples = [
    "ภูมิทัศน์สื่อไทยในปี 2567 มีแนวโน้มว่า ",
    "Fragmentation คือ",
    "ติ๊กต๊อก คือ",
    "รายงานจาก Reuters Institute",
  ];

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center mb-2">
        {examples.map((example, index) => (
          <div
            key={index}
            className="transition-all mr-2 px-5 py-1 text-white hover:text-black duration-300 bg-[#8B8B8B] hover:bg-[#C3D5F0] rounded-md focus:outline-none ease-in-out transform"
            onClick={() => setMessage(example)}
          >
            {example}
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Type your question here..."
          className="flex-grow px-5 py-2 rounded-3xl border border-gray-300 focus:outline-none focus:border-gray-500 -mr-10 shadow-md"
        />
        <button
          type="submit"
          className="py-2 bg-trnsparent text-white transition delay-150 duration-300  ease-in-out transform"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={isHovered ? ArrowGreen : ArrowDeepBlue}
            className="size-10"
            alt="arrow"
          />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
