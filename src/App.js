import React from 'react';
import Home from './layouts/Home';
import Login from "./components/core/Login"
import 'bootstrap/dist/css/bootstrap.min.css';

import ListJobs from './components/pages/ListJobs';
import Matching from './components/pages/Matching';
import Favorites from './components/pages/Favorites';
import ProfilDev from './components/pages/ProfilDev';
import AddJobs from './components/pages/AddJobs';
import ProfilJobs from './components/pages/ProfilJobs';
import ProfilEnt from './components/pages/ProfilEntreprise';
import Api from './utils/Api';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import ListDev from './components/pages/ListDev';

class App extends React.Component {
      constructor(props){
        super(props)
        this.state = {
          
        }
      }
      render(){
        return (
              <div className="Container-fluid">
                <Router>
                    <Switch>
                      <Route path="/favorites">
                        <Favorites />
                      </Route>
                      <Route path="/listjobs">
                        <ListJobs/>
                      </Route>
                      <Route path="/addjobs">
                        <AddJobs/>
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
                      <Route path="/profilentreprise">
                        <ProfilEnt/>
                      </Route>
                      <Route path="/login">
                        <Login/>
                      </Route>
                      <Route path="/profiljobs">
                        <ProfilJobs />
                      </Route>
                      <Route path="/">
                        <Home />
                      </Route>
                    </Switch>
                </Router>
              </div>
            );
      }     
}

export default App;
