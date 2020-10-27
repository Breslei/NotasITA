import React from 'react';
import {Button, Container} from '@material-ui/core';
import "../assets/css/MainMenu.css"

import { Link } from 'react-router-dom';

export default function Main() {
  return (
   <Container maxWidth="xl" disableGutters="true">
    <center>
    <div className='containerMenu'>
      <div className='contentMenu'>
        <Link to='/RegisterClass' className='linkMenu'>
          <Button id='buttonUpMenuLeft' variant='outlined' color='primary'>
            Register Class
          </Button>
        </Link>

        <Link to='/SearchClass' className='linkMenu'>
          <Button id='buttonUpMenuRight' variant='outlined' color='primary'>
            Search Class
          </Button>
        </Link>

        <br />

        <Link to='/FormMain' className='linkMenu'>
          <Button id='buttonDownMenuLeft' variant='outlined' color='primary'>
            Forms
          </Button>
        </Link>

        <Button
          id='buttonDownMenuRight'
          variant='outlined'
          color='primary'
          href={{ javascript: window.close() }}
        >
          Exit
        </Button>
      </div>
    </div>
   </center> 
  </Container>
  );
}
