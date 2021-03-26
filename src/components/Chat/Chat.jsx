import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import queryString from "querystring";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "../TextContainer/TextContainer";
import "./Chat.css";

let socket;
function Chat({ location , history }) {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  let ENDPOINT = "https://h-chat-app.herokuapp.com/";
  // let ENDPOINT = "http://localhost:5000";
  useEffect(() => {
    let { username, room } = queryString.parse(
      location.search.replace("?", "")
    );

    setUsername(username);
    setRoom(room);
    socket = socketIOClient.connect(ENDPOINT);
    socket.emit("join", { username, room }, (error) => {
      if(error) { 
        history.push("/") ; 
      }
    });

    return () => {
      socket.off();
    };
  }, [location, ENDPOINT]);
  useEffect(() => {
    console.log(messages);
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
    socket.on("roomData", ({ users }) => {
      console.log(users);
      setUsers(users);
    });
  }, [messages, users]);
  const sendMessage = function (event) {
    event.preventDefault();
    socket.emit("sendMessage", message, () => {
      setMessage("");
    });
  };
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} username={username} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
}

export default Chat;
