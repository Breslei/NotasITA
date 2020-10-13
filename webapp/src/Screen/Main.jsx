import React from 'react'
import Button from '@material-ui/core/Button'
import "../css/ButtonMenu.css"

import {Link} from 'react-router-dom'

export default function Main (){
    return(

        <div className="bodyMenu">

        <div className="contentMenu">
            <Button id="buttonUpMenu" variant="outlined" color="primary">
              <Link to="/RegisterClass" > Register Class</Link>
            </Button>

            <Button id="buttonUpMenu" variant="outlined" color="primary">
            Search Class
            </Button>
            <br/>
            <Button id="buttonDownMenu" variant="outlined" color="primary">
            Forms
            </Button>

            <Button id="buttonDownMenu" variant="outlined" color="primary" href={{javascript: window.close()}}>
            Exit
            </Button>

        </div>
        















        </div>
    )
}