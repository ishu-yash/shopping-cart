import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import DashboardLazy from "./Container/Dashboard/Dashboard.lazy";
import LoginLazy from "./Container/Login/Login.Lazy";
import Logout from "./Component/Logout/Logout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={DashboardLazy} />
        <Route path="/login" component={LoginLazy} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact>
          <Redirect
            to={
              localStorage.getItem("login_token") ? "/dashboard/home" : "/login"
            }
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
