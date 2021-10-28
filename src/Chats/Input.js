import React from "react";
import gifs from "../icons/gifs.png";
import "./Input.css";

const Input = ({ setMessage, sendMessage, message, gifsContainerShow }) => {
  return (
    <form className='form'>
      <input
        className='input'
        type='text'
        placeholder='Type a message...'
        value={message}
        onChange={({ target }) => setMessage(target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button className='Button' onClick={gifsContainerShow}>
        <img src={gifs} alt='gifs' />
      </button>
      <button className='Button bgButton' onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
};

export default Input;
