import React, { useState } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

//import '../../css/RegisterClass.css';

export const ShowFrame = ({ visible, title }) => {
  if (visible) {
    return (
      <div className='bodyRegisterClass'>
        <div className='backGroundFrameFormRegisterClass'>
          <h1 className='titleRegisterClass'>
            {' '}
            Register Students from {title}
          </h1>

          <div className='content-body-FirstRegisterClass'>
            <form className='formFirstRegisterClass'>
              <TextField
                style={{ backgroundColor: 'white', borderRadius: '5px' }}
                className='fieldLabelRegisterClass'
                label='First Name'
                type='text'
                variant='outlined'
              />

              <TextField
                style={{
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  marginLeft: '5%',
                  marginBottom: '5%'
                }}
                className='fieldLabelRegisterClass'
                label='Last Name'
                type='text'
                variant='outlined'
              />

              <TextField
                style={{
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  marginLeft: '5%'
                }}
                className='fieldLabelRegisterClass'
                label='E-mail Address'
                type='email'
                variant='outlined'
              />

              <div>
                <FormControl id='chooseTeamRegisterClass'>
                  <InputLabel htmlFor='grouped-select'>
                    Choose the Team
                  </InputLabel>
                  <Select defaultValue='' id='team-selectRegisterClass'>
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <ListSubheader>Team</ListSubheader>
                    <MenuItem value={1}>TS01</MenuItem>
                    <MenuItem value={2}>TS02</MenuItem>
                    <MenuItem value={3}>TS03</MenuItem>
                    <MenuItem value={4}>TS04</MenuItem>
                  </Select>
                </FormControl>

                <FormControl id='responsibilityTeamRegisterClass'>
                  <InputLabel htmlFor='grouped-select'>
                    Responsibility
                  </InputLabel>
                  <Select
                    defaultValue=''
                    id='responsibility-selectRegisterClass'
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <ListSubheader>Responsibility</ListSubheader>
                    <MenuItem value={1}>Product Owner (PO)</MenuItem>
                    <MenuItem value={2}>Scrum Master (SM)</MenuItem>
                    <MenuItem value={3}>Team Developer (TD)</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  className='fieldLabelRegisterClass'
                  type='date'
                  style={{ marginLeft: '2%' }}
                  variant='outlined'
                  id='dateField'
                />
              </div>
            </form>
            <div>
              <Button id='buttonLeft' variant='contained'>
                <b>Register</b>
              </Button>
              <Link to='/Main' className='linkRegisterClass'>
                <Button id='buttonRight' variant='contained'>
                  <b>Cancel</b>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return false;
};
