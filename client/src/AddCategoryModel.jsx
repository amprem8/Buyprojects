// AddCategoryModal.js
import React, { useState } from 'react';

const AddCategoryModal = () => {
  const [formData, setFormData] = useState({
    categoryName: '',
    categoryDescription: '',
    categoryImage: '',
    categoryStatus: 'Active',
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic (e.g., API call)
    // Reset form data after submission
    setFormData({
      categoryName: '',
      categoryDescription: '',
      categoryImage: '',
      categoryStatus: 'Active',
      success: true, // Simulating successful submission
      error: false,
    });
  };

  return (
    <div>
      {/* Modal content */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category Name"
          name="categoryName"
          value={formData.categoryName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Category Description"
          name="categoryDescription"
          value={formData.categoryDescription}
          onChange={handleChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFormData({ ...formData, categoryImage: e.target.files[0] })}
        />
        <select
          name="categoryStatus"
          value={formData.categoryStatus}
          onChange={handleChange}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      {/* Success/Error message */}
      {formData.success && <p>Category added successfully!</p>}
      {formData.error && <p>Error: {formData.error}</p>}
    </div>
  );
};

export default AddCategoryModal;
