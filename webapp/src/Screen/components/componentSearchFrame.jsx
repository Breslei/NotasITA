import React, { useState } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import {Link} from 'react-router-dom'
import '../../css/SearchClass.css';

export const SearchFrame = ({ visible, title }) => {
  if (visible) {
    return (
      
      <div className="bodySearchClass">
          <div className="backGroundFrameFormSearchClass">
              <h1 className="titleSearchClass">Search Students from {title}</h1>
            <div className="content-body-FirstSearchClass"   >
              <form  className="formFirstSearchClass">
               
                <TextField style={{backgroundColor:'white',borderRadius:'5px'}} className="fieldLabelSearchClass" 
                label="First Name" type="text" variant="outlined"/>

                <TextField style={{backgroundColor:'white',borderRadius:'5px', marginLeft:'5%', marginBottom:'5%'}} className="fieldLabelSearchClass"
                label="Last Name" type="text" variant="outlined"/>
               
                <TextField style={{backgroundColor:'white',borderRadius:'5px', marginLeft:'5%'}} className="fieldLabelSearchClass" 
                label="E-mail Address" type="email" variant="outlined"/>

        

                <div>
                        <FormControl>
                        <InputLabel htmlFor="grouped-select">Choose the Team</InputLabel>
                        <Select defaultValue="" id="team-selectSearchClass">
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <ListSubheader>Team</ListSubheader>
                            <MenuItem value="TS01" >TS01</MenuItem>
                            <MenuItem value="TS02" >TS02</MenuItem>
                            <MenuItem value="TS03" >TS03</MenuItem>
                            <MenuItem value="TS04" >TS04</MenuItem>
                        </Select>
                        </FormControl>
                
                        <FormControl  id="responsibilityTeamSearchClass">
                        <InputLabel htmlFor="grouped-select">Responsibility</InputLabel>
                        <Select defaultValue="" id="responsibility-selectSearchClass">
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <ListSubheader>Responsibility</ListSubheader>
                            <MenuItem value='PO' >Product Owner (PO)</MenuItem>
                            <MenuItem value='SM' >Scrum Master (SM)</MenuItem>
                            <MenuItem value='TD' >Team Developer (TD)</MenuItem>
                        </Select>
                        </FormControl>
              

                <TextField className="fieldLabelSearchClass"  label="Date" type="date" style={{marginLeft:"2%"}}
                variant="outlined" id="dateField"/>

                  </div>
             </form>   
             <div >
          <Button id="buttonLeft"  variant="contained" ><b>Search</b></Button>
          <Link to="/Main" className="linkSearch"><Button id="buttonRight"  variant="contained" ><b>Cancel</b></Button></Link>
         </div>
            </div>
        </div>      
        </div>
    );
  }
  return false;
};
