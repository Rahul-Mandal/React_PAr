import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Delete = () => {
  const [items, setItems] = useState([]);
  const productId = '1';
  useEffect(() => {
    // Fetch initial data
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8000/api/accounts/product/${productId}`);
      console.log(response.data)
      setItems(response.data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/accounts/product`);
      setItems((prevItems) => prevItems.filter(item => item.id !== id));
      console.log('Item deleted successfully');
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <>
            <div>
                <h1>Data from API</h1>
               
                     {items.map((item) => (
                        <>
                        <div key={item.uid}></div> 
                        
                    <div className="card" style={{ width: '18rem' }}>
                
                <div className="card-body">
    
                <img
                      
                        src="media/{item.images}"
                        
                        style={{ margin: '10px', width: '150px', height: '150px' }}
                    />
                    <h5 className="card-title">{items.book_name}</h5>
                    <p className="card-text">Price: {items.price} | Category: {items.category__category_name}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            </div>


                    </>
                    ))
                    } 
 </div>
</>)}
export default Delete;
