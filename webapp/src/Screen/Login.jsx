import React from 'react';
import ImageLogo from '../assets/img/ita-logo.png';
import '../assets/css/LoginScreen.css';
import { Container, Paper, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function LoginScreen() {
  return (
    <Container maxWidth='sm' className="Main">
      <Paper>
        <Container >
          <center>
            <img
            src= {ImageLogo}
            className='App-logo'
            width='55%'
            height='55%'
            alt='logo'
            id='imgLogo'
          />
          </center>

          <div className='content'>
            
           <center>
            <h1 className='title'>Acesse o portal</h1>
             </center> 
            
            <form className='form'>
              <TextField
                style={{ backgroundColor: 'white', borderRadius: '5px' }}
                id='fieldLabel'
                label='E-mail Address'
                type='email'
                variant='outlined'
                fullWidth
              />
              <br />
              <br />
              <TextField
                style={{ backgroundColor: 'white', borderRadius: '5px' }}
                id='fieldLabel'
                label='Password'
                type='password'
                variant='outlined'
                fullWidth
              />
            </form>
          </div>

        <center>
          <div className="buttonsDiv">
            <Button id='buttonLeft' variant='contained'>
              <b>Register</b>
            </Button>
            <Link to='/Main' id='linkMain'>
              <Button id='buttonRight' variant='contained'>
                <b>Sign in</b>
              </Button>
            </Link>
          </div>
          </center>
        </Container>
      </Paper>
    </Container>
  );
}
