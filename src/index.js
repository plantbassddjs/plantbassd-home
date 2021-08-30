import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';

import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Takeovers from './pages/Takeovers.js';
import Footer from './components/Footer.js';
import {
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

import './css/index.css';
import './css/styles.scss';
import './css/colors.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
      <div className="App">
        <Navbar />

        <Switch>
          {/* <Route path="/about" component={About} /> */}
          <Route path="/takeovers" component={Takeovers} />

          {/* This path goes last to ensure a default. */}
          <Route path="/" component={Home} />
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