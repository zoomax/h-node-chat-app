import React from "react";
import  ReactEmoji from "react-emoji"
import "./Message.css" ; 
function Message({ message, username }) {
  let isSentByCurrentUser = false;
  const trimmedUsername = username.trim().toLowerCase();
  if (message.username === trimmedUsername) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className="messageContainer ">
      <p className="sentText pr-10">{trimmedUsername}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorLight">{ReactEmoji.emojify(message.text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox ">
        <p className="messageText colorDark">{ ReactEmoji.emojify(message.text)}</p>
      </div>
      <p className="sentText pl-10">{message.username}</p>
    </div>
  );
}

export default Message;
