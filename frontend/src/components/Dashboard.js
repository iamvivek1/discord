import React from 'react';
import ServerList from './ServerList';
import ChannelList from './ChannelList';
import Chat from './Chat';
import UserPanel from './UserPanel';
import './Dashboard.css';

const Dashboard = ({ onLogout }) => {
  const user = {
    username: 'testuser',
    _id: '123456789012345678901234'
  };

  return (
    <div className="dashboard">
      <ServerList />
      <div className="main-content">
        <ChannelList serverName="Server Name" />
        <div className="content">
          <Chat channelName="general" username={user?.username} />
        </div>
        <UserPanel user={user} onLogout={onLogout} />
      </div>
    </div>
  );
};

export default Dashboard;
