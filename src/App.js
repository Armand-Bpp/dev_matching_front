import React from 'react';
import Home from './layouts/Home';
import Login from "./components/core/Login"
import 'bootstrap/dist/css/bootstrap.min.css';

import ListJobs from './components/pages/ListJobs';
import Matching from './components/pages/Matching';
import Favorites from './components/pages/Favorites';
import ProfilDev from './components/pages/ProfilDev';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import ListDev from './components/pages/ListDev';

function App() {
  return (
          <div className="Container-fluid">
            <Router>
                <Switch>
                  <Route path="/favorites">
                    <Favorites/>
                  </Route>
                  <Route path="/listjobs">
                    <ListJobs/>
                  </Route>
                  <Route path="/matching">
                    <Matching/>
                  </Route>
                  <Route path="/Listdev">
                    <ListDev/>
                  </Route>
                  <Route path="/profildev">
                    <ProfilDev/>
                  </Route>
                  <Route path="/login">
                    <Login/>
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
            </Router>
          </div>
  );
}

export default App;
