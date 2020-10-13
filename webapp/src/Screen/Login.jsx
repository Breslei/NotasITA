import React from 'react'
import ReactDOM from 'react-dom';
import ImageLogo from '../img/ita-logo.png'
import '../css/Screen.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'



export default function LoginScreen (){
    
    return(
    <div className="body">
         
     <div className="content-body">
           
          <img src={ImageLogo} className="App-logo" alt="logo" id="logo"/>
     
          <div className="content">
            <h1 className="title">Acesse o portal</h1>
              <form  className="form">
                <TextField style={{backgroundColor:'white',borderRadius:'5px'}} id="fieldLabel" 
                label="E-mail Address" type="email" variant="outlined" fullWidth />
                <br/>
                <br/>
                <TextField style={{backgroundColor:'white',borderRadius:'5px'}} id="fieldLabel" 
                label="Password" type="password" variant="outlined" fullWidth />
             </form>
             
             
             
          </div>
        
         <div >
          <Button id="buttonLeft"  variant="contained" ><b>Register</b></Button>
          <Button id="buttonRight"  variant="contained" ><b><Link to="/Main" >Sign in</Link></b></Button>
         </div>
     </div>
    </div>







    )
}