import React from 'react';
import '../styles/SearchResult.css';

const SearchResult = ({ results, onCountryClick }) => {
  return (
    <div className="search-results">
      {results.length > 0 ? (
        <ul>
          {results.map((item, index) => (
            <li key={index} onClick={() => onCountryClick(item)}>
              {item.country}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResult;
