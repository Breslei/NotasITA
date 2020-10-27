import React from 'react';
import Button from '@material-ui/core/Button';
//import "../css/MainMenu.css"

import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <centered>
    <div className='bodyMenu'>
      <div className='contentMenu'>
        <Link to='/RegisterClass' className='linkMenu'>
          <Button id='buttonUpMenu' variant='outlined' color='primary'>
            Register Class
          </Button>
        </Link>

        <Link to='/SearchClass' className='linkMenu'>
          <Button id='buttonUpMenu' variant='outlined' color='primary'>
            Search Class
          </Button>
        </Link>

        <br />

        <Link to='/FormMain' className='linkMenu'>
          <Button id='buttonDownMenu' variant='outlined' color='primary'>
            Forms
          </Button>
        </Link>

        <Button
          id='buttonDownMenu'
          variant='outlined'
          color='primary'
          href={{ javascript: window.close() }}
        >
          Exit
        </Button>
      </div>
    </div>
    </centered> 
  );
}
