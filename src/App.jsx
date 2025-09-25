import InputBox from "./Input"
import ChatMessages from "./Chats";
import React from "react";
import EmptyMode from "./EmptyMode";

function App(){

      const [chatMessages,setChatMessage] = React.useState([
        
    ])
    
  return(
    <div className="main-cont">
      {chatMessages.length < 1 && <EmptyMode />}
      <ChatMessages 
        chatMessages = {chatMessages}    
      />
      <InputBox 
        chatMessages = {chatMessages}
        setChatMessage = {setChatMessage}
        
      />
    </div>
  );
}

export default App