import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import {Link} from 'react-router-dom'

import "../css/SearchClass.css"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}  className="frameTabs"  >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="1º Semester" {...a11yProps(0)} />
          <Tab label="2º Semester" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
     {/*  formulário  */} 
      <FormControl className={classes.formControl} >
          <InputLabel htmlFor="grouped-select" >Choose the Class</InputLabel>
          <Select defaultValue="" id="grouped-select" style={{width:200}}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <ListSubheader>1º Semester</ListSubheader>
            <MenuItem value={1} >CE-229</MenuItem>
            <MenuItem value={2} >CE-240</MenuItem>
            <MenuItem value={3} >CE-245</MenuItem>
          </Select>
        </FormControl>

        <Button id="buttonSendSearchClass"  variant="contained" ><b>Send</b></Button>

        <br/>
        <br/>
        <br/>


        <div className="bodySearchClass">
          <div className="backGroundFrameFormSearchClass">
              <h1 className="titleSearchClass">Search Students{/* {props.nameClass} */} CE-229</h1>
            <div className="content-body-FirstSearchClass"   >
              <form  className="formFirstSearchClass">
               
                <TextField style={{backgroundColor:'white',borderRadius:'5px'}} className="fieldLabelSearchClass" 
                label="First Name" type="text" variant="outlined"/>

                <TextField style={{backgroundColor:'white',borderRadius:'5px', marginLeft:'5%', marginBottom:'5%'}} className="fieldLabelSearchClass"
                label="Last Name" type="text" variant="outlined"/>
               
                <TextField style={{backgroundColor:'white',borderRadius:'5px', marginLeft:'5%'}} className="fieldLabelSearchClass" 
                label="E-mail Address" type="email" variant="outlined"/>

        

                <div>
                        <FormControl className={classes.formControl} id="chooseTeamSearchClass" >
                        <InputLabel htmlFor="grouped-select">Choose the Team</InputLabel>
                        <Select defaultValue="" id="team-selectSearchClass">
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
                
                        <FormControl className={classes.formControl} id="responsibilityTeamSearchClass">
                        <InputLabel htmlFor="grouped-select">Responsibility</InputLabel>
                        <Select defaultValue="" id="responsibility-selectSearchClass">
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <ListSubheader>Responsibility</ListSubheader>
                            <MenuItem value={1} >Product Owner (PO)</MenuItem>
                            <MenuItem value={2} >Scrum Master (SM)</MenuItem>
                            <MenuItem value={3} >Team Developer (TD)</MenuItem>
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

        </TabPanel>





        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}





  //https://material-ui.com/pt/components/tabs/#simple-tabs
