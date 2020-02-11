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
          <div className="Container-fluid">
            <Router>
              <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li>
                        <a class="navbar-brand" href="#">
                          <img src="/img/logo.png" width="50" class="d-inline-block align-top" alt="" />
                        </a>
                      </li>
                      <li className="nav-item mx-1"><Link className="nav-link text-dark" to="/favoris">Favoris</Link></li>
                      <li className="nav-item mx-1"><Link className="nav-link text-dark" to="/jobs/">Jobs</Link></li>
                      <li className="nav-item mx-1"><Link className="nav-link text-dark" to="/matching">Matching</Link></li>
                      <li className="nav-item mx-1"><Link className="nav-link text-dark" to="/faq">FAQ</Link></li>
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
            <div>
              {/* <Home /> */}
            </div>
          </div>
  );
}

export default App;
