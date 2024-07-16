import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error('Error fetching list');
      }
    } catch (error) {
      toast.error('Error fetching list');
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error('Error removing food');
      }
    } catch (error) {
      toast.error('Error removing food');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list-container">
      <h2 className="list-title">..........................................................All Foods List...........................................................</h2>
      <div className="list-table">
        <div className="list-table-header">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span>Action</span>
        </div>
        {list.map((item, index) => (
          <div key={index} className="list-table-row">
            <img src={`${url}/images/${item.image}`} alt={item.name} className="list-item-image" />
            <span className="list-item-name">{item.name}</span>
            <span className="list-item-category">{item.category}</span>
            <span className="list-item-price">${item.price}</span>
            <button onClick={() => removeFood(item._id)} className="list-item-remove-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M3 6h18v2H3V6zm1 3h16l-1 13H5L4 9zm7-5h2v1h-2V4zm-2 0h6v1h-6V4zm1 3h4v1h-4V7zm-2 0h1v1h-1V7zm6 0h1v1h-1V7zm-5 3h1v10h-1V10zm3 0h1v10h-1V10z"/></svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
