import React from "react";
import ChatInput from "./ChatInput";

function ChatMessages({chatMessages}){
    let elementRef = React.useRef(null)
    React.useEffect(()=>{
        const containerElem = elementRef.current
        if(containerElem){
            containerElem.scrollTop = containerElem.scrollHeight
        }
    },[chatMessages])
  return(
    <div className="chat-container" ref={elementRef}>
        {chatMessages.map((item)=>{
        return(
          <ChatInput 
            message = {item.message}
            sender = {item.sender}
            key={item.id}
          />
        );
      })}
    </div>
  )
}

export default ChatMessages