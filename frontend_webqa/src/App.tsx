import React from "react";
import ChatInterface from "./components/ChatInterface";

const App: React.FC = () => {
  return (
    <div>
      <h1>My React App</h1>
      <ChatInterface name="John" />
    </div>
  );
};

export default App;
