import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme, AppBar,Tabs,Tab,Typography,Box,
  InputLabel,MenuItem,ListSubheader,FormControl,Select,Button, Container } from '@material-ui/core/';

import '../assets/css/RegisterClass.css'
import { ShowFrame } from './components/componentsFirstRegisterFrame.jsx';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
   <Container>
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
    </Container>
  );
}

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
  const [classSelected, setClassSelected] = useState('CE-229');
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const sendChoosedClass = () => {
    setIsVisible(true);
  };

  return (
    <Container maxWidth="xl">
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
          <div>
            <FormControl  id="selectCombo">
              <InputLabel htmlFor='grouped-select'>Choose the Class</InputLabel>
              <Select
                defaultValue='CE-229'
                id='grouped-select'
                onChange={(event) => setClassSelected(event.target.value)}
                style={{ width: 200 }}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <ListSubheader>1º Semester</ListSubheader>
                <MenuItem value='CE-229'>CE-229</MenuItem>
                <MenuItem value='CE-240'>CE-240</MenuItem>
                <MenuItem value='CE-245'>CE-245</MenuItem>
              </Select>
            </FormControl>

            <Button
              id='buttonRegister'
              variant='contained'
              onClick={() => sendChoosedClass()}
            >
              <b>Send</b>
            </Button>

            <ShowFrame visible={isVisible} title={classSelected} />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
      </SwipeableViews>
    </div>
    </Container>
  );
}
