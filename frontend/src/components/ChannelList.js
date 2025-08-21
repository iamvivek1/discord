import React from 'react';
import './ChannelList.css';

const ChannelList = ({ serverName }) => {
  return (
    <div className="channel-list">
      <div className="channel-header">
        <h3>{serverName}</h3>
        <i className="fas fa-chevron-down"></i>
      </div>
      <div className="channels">
        <div className="channel-category">
          <i className="fas fa-chevron-down"></i>
          <h4>Text Channels</h4>
        </div>
        <div className="channel active">
          <i className="fas fa-hashtag"></i>
          <span>general</span>
        </div>
        <div className="channel">
          <i className="fas fa-hashtag"></i>
          <span>random</span>
        </div>
        <div className="channel">
          <i className="fas fa-hashtag"></i>
          <span>memes</span>
        </div>
        <div className="channel-category">
          <i className="fas fa-chevron-down"></i>
          <h4>Voice Channels</h4>
        </div>
        <div className="channel">
          <i className="fas fa-volume-up"></i>
          <span>General</span>
        </div>
        <div className="channel">
          <i className="fas fa-volume-up"></i>
          <span>Gaming</span>
        </div>
      </div>
    </div>
  );
};

export default ChannelList;