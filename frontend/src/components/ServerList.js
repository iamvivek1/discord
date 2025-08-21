import React from 'react';
import './ServerList.css';

const ServerList = () => {
  return (
    <div className="server-list">
      <div className="server-icon discord-icon">
        <i className="fab fa-discord"></i>
      </div>
      <div className="separator"></div>
      <div className="server-icon server-icon-active">G</div>
      <div className="server-icon">S</div>
      <div className="server-icon">
        <i className="fas fa-plus"></i>
      </div>
      <div className="server-icon">
        <i className="fas fa-compass"></i>
      </div>
    </div>
  );
};

export default ServerList;