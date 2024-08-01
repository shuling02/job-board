import React, { useState } from 'react';
import './App.css';

const jobs = require('./JobBoardData.json');
console.log(jobs);


function FilteredSearchBar() {
  const [query, setQuery] = useState('');
  const [filterOption1, setFilterOption1] = useState('all'); // Default filter option 1
  const [filterOption2, setFilterOption2] = useState('all'); // Default filter option 2

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the search action with the query and filter options
    console.log('Search for:', query);
    console.log('Filter option 1:', filterOption1);
    console.log('Filter option 2:', filterOption2);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFilterChange1 = (e) => {
    setFilterOption1(e.target.value);
  };

  const handleFilterChange2 = (e) => {
    setFilterOption2(e.target.value);
  };

  return (
    <form className="search-container light-purple" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by title, keyword or company"
        value={query}
        onChange={handleChange}
      />
      <select value={"Education level"} onChange={handleFilterChange1}>
        <option value="all">All</option>
        <option value="BS">BS</option>
        <option value="MS">MS</option>
        <option value="PhD">PhD</option>
        {/* Add more options for filter 1 */}
      </select>
      <select value={"tags"} onChange={handleFilterChange2}>
        <option value="all">All</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Internship">Internship</option>
        {/* Add more options for filter 2 */}
      </select>
      <button type="submit">Search</button>
    </form>
  );
}

export default FilteredSearchBar;
