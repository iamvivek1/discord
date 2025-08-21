import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      onLogin();
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome back!</h2>
        <p>We're so excited to see you again!</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              className="form-input"
            />
          </div>
          
          <button type="submit" className="auth-button">Login</button>
        </form>
        
        <p className="auth-link">
          Need an account? <span onClick={() => navigate('/register')}>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
