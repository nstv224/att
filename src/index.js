import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Switch, Route, Redirect } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import LazyLoader from "./lazyLoader";
import Home from "./home";

const Editor = React.lazy(() => import("./editor"));

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route path={"/sql-editor"} component={LazyLoader(Editor)} />
				<Route path={"/"} component={Home} />
				<Redirect to="/" />
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
