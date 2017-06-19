import React from "react";
import { render } from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import {Provider} from "react-redux";
import Root from "./container/Root.jsx";
// import Root from "./containers/Root";
import store from "./stores/store";


render(<Provider store={store}>
        <Router history={browserHistory}>
			<Route path={"/"} component={Root} >
               
			</Route>
		</Router>
	</Provider> ,
window.document.getElementById("container"));