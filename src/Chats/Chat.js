import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import TextContainer from "./TextContainer";
import Messages from "./Messages";
import InfoBar from "./InfoBar";
import Input from "./Input";
import GifsContainer from "./GifsContainer";

import "./Chat.css";

let socket;

const Chat = () => {
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [gifSearch, setGifSearch] = useState("");
  const [messages, setMessages] = useState([]);
  const [gifs, setGifs] = useState(false);

  const { name, room } = queryString.parse(window.location.search);

  useEffect(() => {
    socket = io("https://chat-app-tirth.herokuapp.com", {
      transports: ["websocket"],
    });

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    socket.on("message", (message) => {
      setMessages((PrevMsg) => [...PrevMsg, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [name, room]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  const gifsContainer = (e) => {
    e.preventDefault();
    setGifSearch(message);
    setGifs((prev) => {
      return !prev;
    });
  };

  const sendGif = (url) => {
    socket.emit("sendMessage", url, () => setGifs(false));
    setMessage("");
  };

  return (
    <div className='outerContainer'>
      <div className='container'>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
          gifsContainerShow={gifsContainer}
        />
        {gifs && <GifsContainer gifSearchP={gifSearch} sendGif={sendGif} />}
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
