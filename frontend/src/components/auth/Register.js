import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { username, email, password, confirmPassword } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post('/auth/register', { username, email, password });
      localStorage.setItem('token', res.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      onRegister();
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create an account</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={onChange}
              required
              minLength="3"
              maxLength="30"
              className="form-input"
            />
          </div>
          
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
              minLength="6"
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              required
              minLength="6"
              className="form-input"
            />
          </div>
          
          <button type="submit" className="auth-button">Continue</button>
        </form>
        
        <p className="auth-link">
          Already have an account? <span onClick={() => navigate('/login')}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
