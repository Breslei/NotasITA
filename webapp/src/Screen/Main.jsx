import React from 'react'
import Button from '@material-ui/core/Button'
import "../css/ButtonMenu.css"

export default function Main (){
    return(

        <div className="bodyMenu">

        <div className="contentMenu">
            <Button id="buttonUpMenu" variant="outlined" color="primary">
            Register Class
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