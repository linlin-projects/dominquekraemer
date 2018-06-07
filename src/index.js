import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import registerServiceWorker from "./registerServiceWorker";
import indexRoutes from "./routes/index.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            {indexRoutes.map((prop, key) => {
                return (
                    <Route
                        path={prop.path}
                        key={key}
                        component={prop.component}
                    />
                );
            })}
        </Switch>
    </Router>,
    document.getElementById("root")
);
registerServiceWorker();
