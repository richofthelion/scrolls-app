import React, { useCallback, ChangeEvent, KeyboardEvent } from 'react';
import './QuerySearch.scss';

//
// --- Types ---

export interface SearchProps {
  readonly handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  readonly handleSearch: () => void;
  readonly value?: string;
}

export const Search: React.FunctionComponent<SearchProps> = (props: SearchProps) => {
  const { value, handleSearch, handleChange } = props;

  // Specific for handling Enter keypress on input focus
  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }, [handleSearch]);

  return (
    <div id='search-container'>
      <input type="search" placeholder="Search by name" id="search-bar" name="card-query" value={value} onChange={handleChange} onKeyDown={handleKeyDown} />
      <button type="button" id='search-button' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
