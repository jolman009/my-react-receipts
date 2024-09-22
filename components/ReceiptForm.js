'use client';

import React, { useState } from 'react';

const ReceiptForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    storeName: '',
    storeAddress: '',
    totalItems: '',
    totalAmount: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      storeName: '',
      storeAddress: '',
      totalItems: '',
      totalAmount: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="storeName">Store Name:</label>
      <input
        type="text"
        id="storeName"
        name="storeName"
        value={formData.storeName}
        onChange={handleInputChange}
        required
      />
      
      <label htmlFor="storeAddress">Store Address:</label>
      <input
        type="text"
        id="storeAddress"
        name="storeAddress"
        value={formData.storeAddress}
        onChange={handleInputChange}
        required
      />
      
      <label htmlFor="totalItems">Total Items:</label>
      <input
        type="number"
        id="totalItems"
        name="totalItems"
        value={formData.totalItems}
        onChange={handleInputChange}
        required
      />
      
      <label htmlFor="totalAmount">Total Amount:</label>
      <input
        type="number"
        id="totalAmount"
        name="totalAmount"
        value={formData.totalAmount}
        onChange={handleInputChange}
        step="0.01"
        required
      />
      
      <button type="submit">Save Receipt</button>
    </form>
  );
};

export default ReceiptForm;