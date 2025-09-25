function ChatInput({message,sender}){
    return (
        <div className="chat-cont">
            <div className={sender === "user"?'chat-mess-user':'chat-mess-bot'}>
            {sender === "bot" && <img className="img" src="../public/robot.png" alt="user" width={80} />}
            {message}
            {sender === "user" && <img className="img" src="../public/—Pngtree—avatar icon profile icon member_5247852.png" alt="user" width={80} />}
        </div>
        </div>
    );
}

export default ChatInput