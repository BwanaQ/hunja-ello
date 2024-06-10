import React from 'react';
import { Button, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const ReadingList = ({ readingList, onRemove }) => {
  return (
    <Grid container spacing={2}>
      {readingList.length === 0 ? (
        <Grid item xs={12}>
          <Typography variant="h6" component="p">
            No books in the reading list.
          </Typography>
        </Grid>
      ) : (
        readingList.map((book, index) => (
          <Grid item key={index} xs={12} sm={6} md={6} lg={3}>
            <Card style={{ marginBottom: '16px' }}>
              <CardMedia
                component="img"
                height="140"
                image={`/assets/${book.coverPhotoURL}`}
                alt={book.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontSize: '22px' }} 
                >
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  By {book.author}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => onRemove(book)}
                >
                  Remove from Reading List
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
