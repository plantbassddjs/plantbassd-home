import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import "./css/colors.scss";
import "./index.css";

import Home from "./pages/Home.js";
import Links from "./pages/Links.js";
import RadioPage from "./pages/RadioPage.js";
import TakeoverPage from "./pages/TakeoverPage.js";
import ContactPage from "./pages/ContactPage.js";
import PageNotFound from "./pages/PageNotFound.js";
import reportWebVitals from "./reportWebVitals";

export function PublicLayout() {
	return (
		<div className="App">
			<Navbar />

			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/radio" component={RadioPage} />
				<Route path="/takeovers" component={TakeoverPage} />
				<Route path="/contact-us" component={ContactPage} />
				<Route component={PageNotFound} />
			</Switch>

			<Footer />
		</div>
	);
}

export default function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/links" component={Links} />
				<Route path="/" component={PublicLayout} />
			</Switch>
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
