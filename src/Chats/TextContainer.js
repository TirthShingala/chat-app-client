import React from "react";

import onlineIcon from "../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className='textContainer'>
    <div>
      <h1>Realtime Chat Application 💬</h1>
      <h2>Created with React, Express, Node.js and Socket.IO</h2>
      <h2>
        By{" "}
        <a
          href='https://www.linkedin.com/in/tirthshingala/'
          target='_blank'
          rel='noreferrer noopener'>
          Tirth Shingala
        </a>
      </h2>
    </div>
    {users ? (
      <div>
        <h1>People Currently In Room :</h1>
        <div className='activeContainer'>
          <h2>
            {users.map(({ name }) => (
              <div key={name} className='activeItem'>
                <img alt='Online Icon' src={onlineIcon} />
                {name[0].toUpperCase() + name.substring(1)}
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
