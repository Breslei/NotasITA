/* APAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR!!!!!!!!!!!! */


import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../css/FirstSemesterRegister.css'


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 240,
    },
  }));


export default function FirstSemesterRegister(){

    const classes = useStyles();




    
    function selectionItem(value){
        {console.log(value)}
        switch(value){
            case "1":
                return(
                   <div>
                    {console.log("Hello")}
                </div> 
                )
            case "2":
                return(
                <div>
                  <text>Hello 2</text>
                </div> 
                )
            case "3":
                return(
                <div>
                  <text>Hello 3</text>
                </div> 
             )
            
        }
    }


    return(
        <div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Choose the Class</InputLabel>
          <Select defaultValue="" id="grouped-select">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <ListSubheader>1º Semester</ListSubheader>
            <MenuItem value={1} >CE-229</MenuItem>
            <MenuItem value={2} >CE-240</MenuItem>
            <MenuItem value={3} >CE-245</MenuItem>
          </Select>
        </FormControl>
         <Button onClick={()=>selectionItem()}>Select</Button>
      

        <br/>
        <br/>
        <br/>


        <div className="bodyFirstSemesterRegister">
          <div className="backGroundFrameForm">
              <h1 className="title">Register Students{/* {props.nameClass} */} CE-229</h1>
            <div className="content-body-First"   >
              <form  className="formFirst">
               
                <TextField style={{backgroundColor:'white',borderRadius:'5px'}} className="fieldLabel" 
                label="First Name" type="text" variant="outlined"/>

                <TextField style={{backgroundColor:'white',borderRadius:'5px', marginLeft:'5%', marginBottom:'5%'}} className="fieldLabel"
                label="Last Name" type="text" variant="outlined"/>
               
                <TextField style={{backgroundColor:'white',borderRadius:'5px', marginLeft:'5%'}} className="fieldLabel" 
                label="E-mail Address" type="email" variant="outlined"/>

        

                <div>
                        <FormControl className={classes.formControl} id="chooseTeam" >
                        <InputLabel htmlFor="grouped-select">Choose the Team</InputLabel>
                        <Select defaultValue="" id="team-select">
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <ListSubheader>Team</ListSubheader>
                            <MenuItem value={1} >TS01</MenuItem>
                            <MenuItem value={2} >TS02</MenuItem>
                            <MenuItem value={3} >TS03</MenuItem>
                            <MenuItem value={4} >TS04</MenuItem>
                        </Select>
                        </FormControl>
                
                        <FormControl className={classes.formControl} id="responsibilityTeam">
                        <InputLabel htmlFor="grouped-select">Responsibility</InputLabel>
                        <Select defaultValue="" id="responsibility-select">
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <ListSubheader>Responsibility</ListSubheader>
                            <MenuItem value={1} >Product Owner (PO)</MenuItem>
                            <MenuItem value={2} >Scrum Master (SM)</MenuItem>
                            <MenuItem value={3} >Team Developer (TD)</MenuItem>
                        </Select>
                        </FormControl>
              

                <TextField className="fieldLabel"  label="Date" type="date" style={{marginLeft:"0.5%"}}
                variant="outlined" id="dateField"/>

                  </div>
             </form>   
             <div >
          <Button id="buttonLeft"  variant="contained" ><b>Register</b></Button>
          <Button id="buttonRight"  variant="contained" ><b>Cancel</b></Button>
         </div>
            </div>
        </div>
        
      
        </div>
        
        </div>
    )

} 
