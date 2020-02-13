import React from 'react';
import Home from './layouts/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Faq from './components/pages/Faq';
import ListJobs from './components/pages/ListJobs';
import Matching from './components/pages/Matching';
import Favoris from './components/pages/Favoris';
import ProfilDev from './components/pages/ProfilDev';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
          <div className="Container-fluid">
            <Router>
                <Switch>
                  <Route path="/favoris">
                    <Favoris />
                  </Route>
                  <Route path="/listjobs">
                    <ListJobs/>
                  </Route>
                  <Route path="/matching">
                    <Matching/>
                  </Route>
                  <Route path="/profildev">
                    <ProfilDev/>
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
