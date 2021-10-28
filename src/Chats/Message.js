import React from "react";
import GifM from "./GifM";

import "./Message.css";

const Message = ({ message, name }) => {
  let isSentByCurrentUser = false;
  let isText = true;

  let text = message.text;

  if (text.includes("https://giphy.com/gifs/")) {
    isText = false;
    text = text.replace("https://giphy.com/gifs/", "");
    const arr = text.split("-");
    text = arr.pop();
  }

  const trimmedName = name.trim().toLowerCase();

  if (message.user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className='messageContainer justifyEnd'>
      <p className='sentText pr-10'>{trimmedName}</p>
      <div className='messageBox backgroundBlue'>
        {isText ? (
          <p className='messageText colorWhite'>{text}</p>
        ) : (
          <GifM gifId={text} />
        )}
      </div>
    </div>
  ) : (
    <div className='messageContainer justifyStart'>
      <div className='messageBox backgroundLight'>
        {isText ? (
          <p className='messageText colorDark'>{text}</p>
        ) : (
          <GifM gifId={text} />
        )}
      </div>
      <p className='sentText pl-10 '>{message.user}</p>
    </div>
  );
};

export default Message;
