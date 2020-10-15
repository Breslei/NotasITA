import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Screen/Routes';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
