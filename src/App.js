import React from 'react';
import Navbar from './components/Navbar.js';
import Home from './Home.js'
import Footer from './components/Footer.js';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
