import React from "react";

function InputBox({chatMessages,setChatMessage}){
    const [inputText,setInputText] = React.useState('')
    function saveInput(event){
        setInputText(event.target.value)
    }
    function sendMessage(){
        const newMessage = [
            ...chatMessages,
            {
                message:inputText,
                sender:"user",
                id: crypto.randomUUID()
            }
        ]
        setChatMessage(newMessage)

        const response = Chatbot.getResponse(inputText)

        setChatMessage([
            ...newMessage,
            {
                message: response,
                sender: "bot",
                id: crypto.randomUUID()
            }
        ])

        setInputText('')
    }
    return(
        <div className={chatMessages.length<1?"box-main":"main-box"}>
            <input type="text" className="input" placeholder="Ask anything..." onChange={saveInput} value={inputText}/>
            <button onClick={sendMessage} className="button">Send</button>
        </div>
    );
}

export default InputBox