import React from 'react';
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import './BookList.css';

const BookList = ({ books, onAdd }) => {
  return (
    <Grid container spacing={2}>
      {books.map((book, index) => (
        <Grid item key={index} xs={12} sm={6} md={6} lg={3}>
          <Card style={{ marginBottom: '16px' }}>
            <CardMedia
              component="img"
              height="140"
              image={process.env.PUBLIC_URL + '/assets/' + book.coverPhotoURL}
              alt={book.title}
            />
            <CardContent>
              <Typography className="title" gutterBottom variant="h5" component="div" sx={{ fontSize: '22px' }}>
                {book.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                By {book.author}
              </Typography>
              <Button
                variant="contained"
                className='btn-add'
                onClick={() => onAdd(book)}
              >
                Add to Reading List
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
