// import React, { useEffect, useState } from 'react';

// const Product = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('http://localhost:8000/api/accounts/product/1'); // Replace with your API URL
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const result = await response.json();
//                 console.log(result.data)
//                 setData(result.data);
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <>
//         <div>
//             <h1>Data from API</h1>
           
//                 {data.map((item) => (
//                     <>
//                     <div key={item.uid}></div> 
                    
//                 <div className="card" style={{ width: '18rem' }}>
            
//             <div className="card-body">

//             <img
                  
//                     src="media/{item.images}"
                    
//                     style={{ margin: '10px', width: '150px', height: '150px' }}
//                 />
//                 <h5 className="card-title">{item.book_name}</h5>
//                 <p className="card-text">Price: {item.price} | Category: {item.category__category_name}</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//                 </>
//                 ))}
            

            
//         </div>
//         </>
//     );
    
// };

// export default Product;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
    const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingSingle, setLoadingSingle] = useState(true);
  const [errorProducts, setErrorProducts] = useState('');
  const [errorSingle, setErrorSingle] = useState('');

  const productId = '1'; // Replace with the desired product ID or use dynamic routing

  useEffect(() => {
    // Fetch the list of products
    // const fetchProducts = async () => {
    //     try {
    //             const response = await fetch('http://localhost:8000/api/accounts/product'); // Replace with your API URL
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const result = await response.json();
    //             console.log(result.data)
    //             setProducts(result.data);
    //         } catch (error) {
    //     setErrorProducts('Failed to fetch products');
    //   } finally {
    //     setLoadingProducts(false);
    //   }
    // };

    // Fetch a single product
    const fetchSingleProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/accounts/product/${productId}`); // Replace with your API URL
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('type',  response.data)
            // const result = await response.json();
            // console.log('test',  result)
            setSingleProduct(response.data);
        } catch (error) {
            console.log(error)
        setErrorSingle('Failed to fetch product');
      } finally {
        setLoadingSingle(false);
      }
    };

    // fetchProducts();
    fetchSingleProduct();
  }, [productId]); // Add productId to dependencies if it can change

//   if (loadingProducts) return <p>Loading products...</p>;
//   if (errorProducts) return <p>{errorProducts}</p>;

  if (loadingSingle) return <p>Loading single product...</p>;
  if (errorSingle) return <p>{errorSingle}</p>;
  console.log(singleProduct)
  return (
            <>
            <div>
                <h1>Data from API</h1>
               
                    {/* {products.map((item) => (
                        <>
                        <div key={item.uid}></div> 
                        
                    <div className="card" style={{ width: '18rem' }}>
                
                <div className="card-body">
    
                <img
                      
                        src="media/{item.images}"
                        
                        style={{ margin: '10px', width: '150px', height: '150px' }}
                    />
                    <h5 className="card-title">{item.book_name}</h5>
                    <p className="card-text">Price: {item.price} | Category: {item.category__category_name}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>


                    </>
                    ))} */}
                
    {singleProduct && (
        <div>
          <h2>Selected Product</h2>
          <h3>{singleProduct.id}</h3>
          <p>{singleProduct.book_name}</p>
          {/* <pre>{data ? JSON.stringify(singleProduct.book_name, null, 2) : 'Loading...'}</pre> */}
          <p>Price: ${singleProduct.price}</p>
        </div>
      )}
                
            </div>
            </>
        );
        
    };


//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>{product.id}</li>
//         ))}
//       </ul>

//       {singleProduct && (
//         <div>
//           <h2>Selected Product</h2>
//           <h3>{singleProduct.book_name}</h3>
//           <p>{singleProduct.description}</p>
//           <p>Price: ${singleProduct.price}</p>
//         </div>
//       )}
//     </div>
//   );
// };

export default Product;
