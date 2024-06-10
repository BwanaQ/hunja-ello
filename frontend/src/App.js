import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import BookListView from './views/BookListView';
import ReadingListView from './views/ReadingListView';
import './App.css'
const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [searchTerm, setSearchTerm] = useState('');
  const [readingList, setReadingList] = useState([]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const adjustedBooks = data.books.map(book => ({
    ...book,
    coverPhotoURL: book.coverPhotoURL.replace('assets/', ''),
  }));

  const filteredBooks = adjustedBooks.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addBookToReadingList = (book) => {
    setReadingList([...readingList, book]);
  };

  const removeBookFromReadingList = (book) => {
    setReadingList(readingList.filter(b => b.title !== book.title));
  };

  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={
            <BookListView
              books={filteredBooks}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onAdd={addBookToReadingList}
            />
          } />
          <Route path="/reading-list" element={
            <ReadingListView
              readingList={readingList}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onRemove={removeBookFromReadingList}
            />
          } />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
