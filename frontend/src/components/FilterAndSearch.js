// src/components/FilterAndSearch.jsx
import React, { useState } from 'react';
import './FilterAndSearch.css'; // Create this CSS file

const FilterAndSearch = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    // In a real app, you'd trigger a data fetch/filter here
    console.log(`Filter set to: ${filter}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); 
  };

  const handleSearchSubmit = () => {
    // In a real app, you'd trigger a search here
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="filter-search-container">
      <div className="filter-buttons">
        <button
          className={`filter-button ${activeFilter === 'All' ? 'active' : ''}`}
          onClick={() => handleFilterClick('All')}
        >
          All
        </button>
        <button
          className={`filter-button ${activeFilter === 'Vegetarian' ? 'active' : ''}`}
          onClick={() => handleFilterClick('Vegetarian')}
        >
          Vegetarian
        </button>
        <button
          className={`filter-button ${activeFilter === 'Non-veg' ? 'active' : ''}`}
          onClick={() => handleFilterClick('Non-veg')}
        >
          non-veg
        </button>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for meals..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button onClick={handleSearchSubmit} className="search-button">
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterAndSearch;