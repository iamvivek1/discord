import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const handleLogout = () => {
    // In a real app, you'd clear the user's session here.
    // For now, we'll just log to the console.
    console.log("Logout clicked");
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard onLogout={handleLogout} />} />
      </Routes>
    </Router>
  );
}

export default App;
