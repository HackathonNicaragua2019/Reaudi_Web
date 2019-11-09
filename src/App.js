import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Layout/Navbar';
import signup from './components/auth/signup';



function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Dashboard}></Route>
                <Route exact path='/signup' component={signup}></Route>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
