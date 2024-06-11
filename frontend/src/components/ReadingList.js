import React from 'react';
import { Badge, Button, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import './ReadingList.css'
const ReadingList = ({ readingList, onRemove }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="p" className='page-header'>
            Reading List
        </Typography>
      </Grid>
      {readingList.length === 0 ? (
        <Grid item xs={12}>
          <Typography variant="h6" component="p" className='no-books'>
            No books in the reading list.
          </Typography>
        </Grid>
      ) : (
        readingList.map((book, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
            <Card style={{ marginBottom: '16px' }}>
              <CardMedia
                component="img"
                height="140"
                image={`/assets/${book.coverPhotoURL}`}
                alt={book.title}
              />
              <CardContent>
                <Badge className="readingLevel" component="div" sx={{ fontSize: '0.8rem' }}>
                  {book.readingLevel}
                </Badge>                
                <Typography
                  className="title"
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontSize: '0.8rem' }} 
                >
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  By {book.author}
                </Typography>
                <Button
                  variant="contained"
                  className='btn-remove'
                  onClick={() => onRemove(book)}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default ReadingList;
