import React from 'react';
import { Grid } from '@mui/material';
import ReadingList from '../components/ReadingList';

const ReadingListView = ({ readingList, onRemove }) => {
  return (
    <div>
     <Grid container spacing={4}>
        <Grid item xs={12}>
          <ReadingList readingList={readingList} onRemove={onRemove} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ReadingListView;
