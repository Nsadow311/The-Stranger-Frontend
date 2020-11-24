import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

ReactDOM.render(
  <Router>
    <React.StrictMode>
   <ThemeProvider>
     <CSSReset />
     <App />
   </ThemeProvider>
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);



