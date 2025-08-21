import React from 'react';
import './Chat.css';

const Chat = ({ channelName, username }) => {
  const messages = [
    {
      id: 1,
      author: 'testuser',
      avatar: 'T',
      timestamp: 'Today at 4:20 PM',
      text: 'This is a test message.',
    },
    {
      id: 2,
      author: 'anotheruser',
      avatar: 'A',
      timestamp: 'Today at 4:21 PM',
      text: 'This is another test message.',
    },
  ];

  return (
    <div className="chat">
      <div className="chat-header">
        <div className="channel-name">
          <i className="fas fa-hashtag"></i>
          <h3>{channelName}</h3>
        </div>
        <div className="channel-description">
          This is the beginning of the #{channelName} channel.
        </div>
      </div>
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <div className="avatar">{message.avatar}</div>
            <div className="message-content">
              <div className="message-header">
                <span className="username">{message.author}</span>
                <span className="timestamp">{message.timestamp}</span>
              </div>
              <div className="text">{message.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="message-input-container">
        <div className="message-input">
          <i className="fas fa-plus-circle"></i>
          <input type="text" placeholder={`Message #${channelName}`} />
          <i className="fas fa-gift"></i>
          <i className="fas fa-sticky-note"></i>
          <i className="fas fa-smile"></i>
        </div>
      </div>
    </div>
  );
};

export default Chat;