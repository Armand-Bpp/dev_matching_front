import React from 'react';
import Home from './layouts/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Faq from './components/pages/Faq';
import Jobs from './components/pages/Jobs';
import Matching from './components/pages/Matching';
import Favoris from './components/pages/Favoris';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <Link className="navbar-brand mx-1">Dev Matching</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item mx-1"><Link className="nav-link text-white" to="/favors">Favoris</Link></li>
                <li className="nav-item mx-1"><Link className="nav-link text-white" to="/jobs/">Jobs</Link></li>
                <li className="nav-item mx-1"><Link className="nav-link text-white" to="/matching">Matching</Link></li>
                <li className="nav-item mx-1"><Link className="nav-link text-white" to="/faq">FAQ</Link></li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/favoris">
              <Favoris />
            </Route>
            <Route path="/jobs">
              <Jobs/>
            </Route>
            <Route path="/matching">
              <Matching/>
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
