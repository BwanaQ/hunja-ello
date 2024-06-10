import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';
import '@fontsource/mulish';

const theme = createTheme({
  typography: {
    fontFamily: 'Mulish, sans-serif',
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
