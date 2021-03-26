import React, { useRef, useEffect } from "react";
import Message from "./Message/Message";
import "./Messages.css";
function Messages({ messages, username }) {
  const messageEl = useRef(null);

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);
  return (
    <div className="messages" ref={messageEl}>
      {messages.map((message, index) => (
        <Message message={message} username={username} key={index} />
      ))}
    </div>
  );
}

export default Messages;
