// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import '/home/sivananthi/Documents/UKI FINAL PROJECT/frontend/src/Components/Productsmaintain.css';

// const Productsmaintain = () => {
//   const [products, setProducts] = useState([]);
//   const [showUploadModal, setShowUploadModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [productToDelete, setProductToDelete] = useState(null);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const [image, setImage] = useState(null);
//   const [quantity, setQuantity] = useState('');
//   const categories = ['Croissants', 'Cupcakes', 'Cake', 'Buns', 'Bread'];

//   // Fetch products when the component mounts
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Handle the deletion of a product
//   const handleDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${productToDelete._id}`);
//       setProducts(products.filter((product) => product._id !== productToDelete._id));
//       setShowDeleteModal(false);
//       setProductToDelete(null);
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   // Handle opening the delete modal
//   const handleOpenDeleteModal = (product) => {
//     setProductToDelete(product);
//     setShowDeleteModal(true);
//   };

//   // Handle submitting the product upload form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('description', description);
//     formData.append('price', price);
//     formData.append('category', category);
//     formData.append('quantity', quantity);
//     formData.append('image', image);

//     try {
//       const response = await axios.post('http://localhost:5000/api/products', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       setProducts([...products, response.data]);
//       setShowUploadModal(false);
//       resetForm();
//     } catch (error) {
//       console.error('Error uploading product:', error);
//       alert('Failed to upload product.');
//     }
//   };

//   // Reset the form fields after submission
//   const resetForm = () => {
//     setName('');
//     setDescription('');
//     setPrice('');
//     setCategory('');
//     setImage(null);
//     setQuantity('');
//   };

//   return (
//     <div className="admin-dashboard">
//       <div className="sidebar">
//         <div className="sidebar-header">
//           <h2>Nutri Bakery</h2>
//         </div>
//         <ul>
//           <li><Link to="/dashboard" className="sidebar-item">Dashboard</Link></li>
//           <li><Link to="/orders" className="sidebar-item">Orders</Link></li>
//           <li><Link to="/products" className="sidebar-item">Products</Link></li>
//           <li><Link to="/customers" className="sidebar-item">Customers</Link></li>
//           <li><Link to="/settings" className="sidebar-item">Settings</Link></li>
//         </ul>
//       </div>

//       <div className="main-content">
//         <header>
//           <div className="search-bar">
//             <input type="text" placeholder="Search for..." />
//           </div>
//           <div className="profile-section">
//             <span>Admin Dashboard</span>
//             <div className="profile-pic"></div>
//           </div>
//         </header>

//         <div className="products-section">
//           <button
//             onClick={() => setShowUploadModal(true)}
//             className="add-product-btn"
//           >
//             Add Product
//           </button>

//           {showUploadModal && (
//             <div className="modal">
//               <div className="modal-content">
//                 <span className="close" onClick={() => setShowUploadModal(false)}>
//                   &times;
//                 </span>
//                 <h2>Upload Product</h2>
//                 <form onSubmit={handleSubmit}>
//                   <label>
//                     Name:
//                     <input
//                       type="text"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       placeholder="Enter product name"
//                       required
//                     />
//                   </label>
//                   <label>
//                     Description:
//                     <textarea
//                       value={description}
//                       onChange={(e) => setDescription(e.target.value)}
//                       placeholder="Enter product description"
//                       required
//                     />
//                   </label>
//                   <label>
//                     Price:
//                     <input
//                       type="number"
//                       value={price}
//                       onChange={(e) => setPrice(e.target.value)}
//                       placeholder="Enter product price"
//                       required
//                     />
//                   </label>
//                   <label>
//                     Category:
//                     <select
//                       value={category}
//                       onChange={(e) => setCategory(e.target.value)}
//                       required
//                     >
//                       {categories.map((cat) => (
//                         <option key={cat} value={cat}>
//                           {cat}
//                         </option>
//                       ))}
//                     </select>
//                   </label>
//                   <label>
//                     Quantity:
//                     <input
//                       type="number"
//                       value={quantity}
//                       onChange={(e) => setQuantity(e.target.value)}
//                       placeholder="Enter product quantity"
//                       required
//                     />
//                   </label>
//                   <label>
//                     Image:
//                     <input
//                       type="file"
//                       onChange={(e) => setImage(e.target.files[0])}
//                       required
//                     />
//                   </label>
//                   <button type="submit">Add Product</button>
//                   <button
//                     type="button"
//                     className="cancel-btn"
//                     onClick={() => setShowUploadModal(false)}
//                   >
//                     Cancel
//                   </button>
//                 </form>
//               </div>
//             </div>
//           )}

//           {showDeleteModal && (
//             <div className="modal">
//               <div className="modal-content">
//                 <span className="close" onClick={() => setShowDeleteModal(false)}>
//                   &times;
//                 </span>
//                 <h2>Confirm Deletion</h2>
//                 <p>Are you sure you want to delete this product?</p>
//                 <button className="confirm-btn" onClick={handleDelete}>
//                   Confirm
//                 </button>
//                 <button className="cancel-btn" onClick={() => setShowDeleteModal(false)}>
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           )}

//           <table className="product-table">
//             <thead>
//               <tr>
//                 <th>Product ID</th>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Category</th>
//                 <th>Quantity</th>
//                 <th>Image</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr key={product._id}>
//                   <td>{product._id}</td>
//                   <td>{product.name}</td>
//                   <td>{product.price}</td>
//                   <td>{product.category}</td>
//                   <td>{product.quantity}</td>
//                   <td>
//                     <img src={product.imageUrl} alt={product.name} style={{ width: '100px' }} />
//                   </td>
//                   <td>
//                     <button
//                       className="delete-btn"
//                       onClick={() => handleOpenDeleteModal(product)}
//                     >
//                       Delete
//                     </button>
//                     <button className="update-btn">Update</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Productsmaintain;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import '/home/sivananthi/Documents/UKI FINAL PROJECT/frontend/src/Components/Productsmaintain.css';

const Productsmaintain = () => {
  const [products, setProducts] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [quantity, setQuantity] = useState('');
  const categories = ['Croissants', 'Cupcakes', 'Cake', 'Buns', 'Bread'];

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Handle the deletion of a product
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${productToDelete._id}`);
      setProducts(products.filter((product) => product._id !== productToDelete._id));
      setShowDeleteModal(false);
      setProductToDelete(null);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Handle opening the delete modal
  const handleOpenDeleteModal = (product) => {
    setProductToDelete(product);
    setShowDeleteModal(true);
  };

  // Handle submitting the product upload form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('quantity', quantity);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/api/products', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setProducts([...products, response.data]);
      setShowUploadModal(false);
      resetForm();
    } catch (error) {
      console.error('Error uploading product:', error);
      alert('Failed to upload product.');
    }
  };

  // Reset the form fields after submission
  const resetForm = () => {
    setName('');
    setDescription('');
    setPrice('');
    setCategory('');
    setImage(null);
    setQuantity('');
  };

  return (
    <div className="admin-dashboard">
      <Sidebar />

      <div className="main-content">
        <header>
          <div className="search-bar">
            <input type="text" placeholder="Search for..." />
          </div>
          <div className="profile-section">
            <span>Admin Dashboard</span>
            <div className="profile-pic"></div>
          </div>
        </header>

        <div className="products-section">
          <button
            onClick={() => setShowUploadModal(true)}
            className="add-product-btn"
          >
            Add Product
          </button>

          {showUploadModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={() => setShowUploadModal(false)}>
                  &times;
                </span>
                <h2>Upload Product</h2>
                <form onSubmit={handleSubmit}>
                  <label>
                    Name:
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter product name"
                      required
                    />
                  </label>
                  <label>
                    Description:
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter product description"
                      required
                    />
                  </label>
                  <label>
                    Price:
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Enter product price"
                      required
                    />
                  </label>
                  <label>
                    Category:
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Quantity:
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="Enter product quantity"
                      required
                    />
                  </label>
                  <label>
                    Image:
                    <input
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                      required
                    />
                  </label>
                  <button type="submit">Add Product</button>
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => setShowUploadModal(false)}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          )}

          {showDeleteModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={() => setShowDeleteModal(false)}>
                  &times;
                </span>
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to delete this product?</p>
                <button className="confirm-btn" onClick={handleDelete}>
                  Confirm
                </button>
                <button className="cancel-btn" onClick={() => setShowDeleteModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          )}

          <table className="product-table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <img src={product.imageUrl} alt={product.name} style={{ width: '100px' }} />
                  </td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleOpenDeleteModal(product)}
                    >
                      Delete
                    </button>
                    <button className="update-btn">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Productsmaintain;


