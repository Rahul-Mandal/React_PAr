import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/accounts/register/', {
        username,
        password,
      });
      console.log(response.data.message)
      // setUsername(response.data.username)
      setMessage(response.data.message);
      navigate('/login');
    } catch (error) {
      // Handling the error response
      console.log(Object.values(error.response.data).flat())
      if (error.response && error.response.data) {
          const errorMessages = Object.values(error.response.data).flat();
          setMessage(errorMessages.join(', ')); // Join messages to display
      } else {
          setMessage('An unknown error occurred');
      }
  }
};
  // console.log(message)
  return (
    <div className="container">
      <h2>Register</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default Registration;
