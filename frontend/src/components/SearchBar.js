import React from 'react';
import { TextField } from '@mui/material';
import './SearchBar.css'
const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <TextField
      label="Search Books"
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      margin="normal"
      className='search'
    />
  );
};

export default SearchBar;
