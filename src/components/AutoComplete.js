import React from 'react';

function AutoComplete({ isVisible, suggestions, handleSuggestionClick }) {
  return (
    <div className={`${isVisible ? 'show suggestion-box' : 'suggestion-box'}`}>
      <ul>
        {suggestions.map((country, index) => (
          <li key={index} onClick={() => handleSuggestionClick(country)}>
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AutoComplete;
