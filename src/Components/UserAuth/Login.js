import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/accounts/login/', {
        username,
        password,
      });
      setMessage(response.data.message);
      navigate('/product');
    }
    catch (error) {
      console.log(Object.values(error.response.data).flat())
            if (error.response && error.response.data) {
                setMessage(error.response.data.error || 'An unknown error occurred');
            } else {
                setMessage('An unknown error occurred');
            }
        }
    };
      // Store user token or session
  //   } catch (error) {
  //     setMessage(error.response.data.message);
  //   }
  // };

  return (
    <div className="container">
      <h2>Login</h2>
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
        <button type="submit" className="btn btn-primary">Login</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default Login;
