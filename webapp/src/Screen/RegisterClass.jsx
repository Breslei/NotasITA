import React from 'react'
import Button from '@material-ui/core/Button'
import "../css/RegisterClass.css"


import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
  
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});
  
  export default function RegisterClass() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="1º Semester" />
          <Tab label="2º Semester" />
        </Tabs>
      </Paper>
    );
  }

  
//https://material-ui.com/pt/components/tabs/