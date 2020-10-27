import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';


import { makeStyles, useTheme, AppBar,Tabs,Tab,Typography,Box,
InputLabel,MenuItem,ListSubheader,FormControl,Select,Button } from '@material-ui/core/';



import { Link } from 'react-router-dom';

import { FramePO } from './components/componentsSprintReviewFrame.jsx';
//import "../css/SearchClass.css"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
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
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [sprintSelected, setSprintSelected] = useState('Sprint1');
  const [responsabiltySelected, setResponsabiltySelected] = useState('TD');
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const choosedSprintReview = () => {
    setIsVisible(true);
  };

  return (
    <div className={classes.root} className='frameTabs'>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
        >
          <Tab label='1º Semester' {...a11yProps(0)} />
          <Tab label='2º Semester' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/*  formulário  */}
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='grouped-select'>Choose the Class</InputLabel>
            <Select
              defaultValue=''
              id='grouped-select'
              style={{ width: 200 }}
              onChange={(event) => setSprintSelected(event.target.value)}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <ListSubheader>1º Semester</ListSubheader>
              <MenuItem value='Sprint1'>1ª Sprint</MenuItem>
              <MenuItem value='Sprint2'>2ª Sprint</MenuItem>
              <MenuItem value='Sprint3'>3ª Sprint</MenuItem>
            </Select>
          </FormControl>

          <FormControl id='responsibilityTeamSearchClass'>
            <InputLabel htmlFor='grouped-select'>Responsibility</InputLabel>
            <Select
              defaultValue=''
              id='responsibility-selectSearchClass'
              onChange={(event) => setResponsabiltySelected(event.target.value)}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <ListSubheader>Responsibility</ListSubheader>
              <MenuItem value='PO'>Product Owner (PO)</MenuItem>
              <MenuItem value='SM'>Scrum Master (SM)</MenuItem>
              <MenuItem value='TD'>Team Developer (TD)</MenuItem>
            </Select>
          </FormControl>

          <Button
            id='buttonSendSearchClass'
            variant='contained'
            onClick={() => choosedSprintReview()}
          >
            <b>Send</b>
          </Button>

          <FramePO visible={isVisible} responsabilty={responsabiltySelected} />
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
