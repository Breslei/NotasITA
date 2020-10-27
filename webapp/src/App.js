import React from 'react';
import Routes from './routes';
import { CssBaseline } from '@material-ui/core';
import './styles/global.css';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Routes />
    </>
  );
}
