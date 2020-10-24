import React, { createElement, useState } from 'react'

import Select from '@material-ui/core/Select';

import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { render } from '@testing-library/react';



export default function  TesteScreen(){

    /* const [available,setAvailable] = useState(false)
 */

    function showResult(value){
       /* React.createElement("input") */
       console.log(value)
        
        
    }


    function getValue(props){

        let answer 
        let enable = false

        if(props ==="outros"){
            enable=true

        render(
            
             answer = React.createElement('input')
        )}
        else{

            enable = false
        } 
    }


    return(
                
            <div>
                    <FormControl>
                    <InputLabel htmlFor="grouped-select" ></InputLabel>
                    <Select defaultValue="" id="grouped-select" style={{width:200}} >
                        <ListSubheader>Resposta</ListSubheader>
                            <MenuItem value="Nao">Não</MenuItem>
                        <MenuItem value="abc" props="outros" onClick={()=>getValue("outros")} onChange={(event)=>alert(event.target.value)}>Outros</MenuItem>
                    </Select>
                    </FormControl>


                     {/*  
  */}
            </div>



    )
}