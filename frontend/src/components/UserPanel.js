import React from 'react';
import './UserPanel.css';

const UserPanel = ({ user, onLogout }) => {
  return (
    <div className="user-panel">
      <div className="user-info">
        <div className="avatar">{user?.username?.charAt(0).toUpperCase()}</div>
        <div className="user-details">
          <div className="username">{user?.username}</div>
          <div className="user-id">#{user?._id?.substring(18)}</div>
        </div>
      </div>
      <div className="user-actions">
        <i className="fas fa-microphone"></i>
        <i className="fas fa-headphones"></i>
        <i className="fas fa-cog"></i>
      </div>
    </div>
  );
};

export default UserPanel;