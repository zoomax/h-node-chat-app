import React from "react";
import "./Input.css";
function Input({ sendMessage, setMessage, message }) {
  return (
    <form className="form">
      <input
        type="text"
        className="input"
        placeholder="type a message ...."
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
}

export default Input;
