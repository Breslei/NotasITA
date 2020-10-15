import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from "./Login"
import Main from './Main'
import FirstSemesterRegister from './FirstSemesterRegister'
import RegisterClass from './RegisterClass'
import SearchClass from './SearchClass'

export default function Routes(){
    return(
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Main" component={Main} />
            <Route path="/FirstSemesterRegister" component={FirstSemesterRegister} />        
            <Route path="/RegisterClass"  component={RegisterClass} />
            <Route path="/SearchClass"  component={SearchClass} />
        </Switch>
    </Router>
    )
}
