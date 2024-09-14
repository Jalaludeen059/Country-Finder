import React, { useState, useEffect } from 'react';
import data from '../data.json';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const filteredResults = data.filter(item =>
        item.country.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by country..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {results.length > 0 ? (
        results.map((country, index) => (
          <div key={index} className="country-details">
            <h2>{country.country}</h2>
            <ul>
              <li><strong>Country:</strong> {country.country}</li>
              <li><strong>Capital:</strong> {country.capital}</li>
              <li><strong>Population:</strong> {country.population.toLocaleString()}</li>
              <li><strong>Official Language(s):</strong> {Array.isArray(country.official_language) ? country.official_language.join(', ') : country.official_language}</li>
              <li><strong>Currency:</strong> {country.currency}</li>
            </ul>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchBar;
