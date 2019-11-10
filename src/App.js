import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Layout/Navbar';
import signup from './components/auth/signup';
import signin from './components/auth/signin';
import aboutus from './components/Layout/aboutus';
import News from './components/Layout/News';



function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Dashboard}></Route>
                <Route path='/signup' component={signup}></Route>
                <Route path='/signin' component={signin}></Route>
                <Route path='/aboutus' component={aboutus}></Route>
                <Route path='/news' component={News}></Route>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
