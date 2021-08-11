import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';

import Navbar from './components/Navbar.js';
import Home from './pages/Home.js'
import Footer from './components/Footer.js';
import {
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

import './css/index.css';
import './css/styles.scss';

export default function App() {
  return (
      <div className="App">
        <Navbar />

        <Switch>
          {/* <Route path="/about" component={About}>*/}
          <Route path="/" component={Home} /> {/* This path goes last to ensure a default. */}
        </Switch>

        <Footer />
      </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

reportWebVitals();