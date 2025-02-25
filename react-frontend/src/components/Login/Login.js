import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

export const Login = ({ setIsAuthenticated }) => {
  const [credentials, setCredentials] = useState({ username: 'user', password: 'password' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:8080/api/tasks', {
        auth: { username: credentials.username, password: credentials.password },
      });

      if (response.status === 200) {
        setIsAuthenticated(true);
        navigate('/tasks');
      }
    } catch (error) {
      alert('Login failed: ' + (error.response?.status === 401 ? 'Wrong credentials' : 'Network error'));
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="user"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
