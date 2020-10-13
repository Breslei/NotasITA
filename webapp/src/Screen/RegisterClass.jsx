import React from 'react'
import Button from '@material-ui/core/Button'
import "../css/RegisterClass.css"

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//import FirstSemesterRegister from './FirstSemesterRegister.jsx'


export default function RegisterClass(){
 
   
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
   
  };

  const firstSemesterScreenRegister = (newValue)=>{
      if( newValue = 1){
       return (
          <div>
              <text>Hello 1º Semester</text>
          </div>
         )
      } else{
        return (
            <div>
                <text>{alert ("Hello 2º Semester")}</text>
            </div>
        )    
      }
  } 

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        centered
      >
        <Tab label="1º Semester"   onClick={()=>firstSemesterScreenRegister()}  />
        <Tab label="2º Semester"  onClick={()=>firstSemesterScreenRegister()} />

      </Tabs>
    </Paper>
  );
}
