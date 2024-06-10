import React from 'react';
import { Grid } from '@mui/material';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

const BookListView = ({ books, searchTerm, onSearchChange, onAdd }) => {
  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <BookList books={books} onAdd={onAdd} />
        </Grid>
      </Grid>
    </div>
  );
};

export default BookListView;
