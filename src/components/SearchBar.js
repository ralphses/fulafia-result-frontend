// SearchBar.js
import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  // Function to handle the search action
  const handleSearch = async () => {
    try {
      const response = await axios.get(`YOUR_SEARCH_ENDPOINT?query=${searchText}`);
      onSearch(response.data); // Handle the search results in the parent component
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div className="mb-4 flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 border rounded-md"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="ml-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
