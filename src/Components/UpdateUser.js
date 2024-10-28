import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateUser = ({ userId }) => {
  const [userData, setUserData] = useState({ author: '', book_name : '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const productId = '1';
  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/accounts/product/${productId}`);
        
        setUserData(response.data['data']);
        console.log(response.data['data'])
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    console.log(e)
    const { name, value } = e.target;
    console.log(name, value)
    setUserData((userData) => ({ ...userData, [name]: value }));
    // setUserData({ ...userData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:8000/api/accounts/product/${productId}/`, userData);
      console.log('Update successful:', response.data)
      alert('User updated successfully!');
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="book_name"
          value={userData.book_name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={userData.author}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update User</button>
    </form>
  );
};

export default UpdateUser;
