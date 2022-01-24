import React from "react";

import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Users from "../Pages/Users";
import UserPage from "../Pages/UserPage";
export default function Routes() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/users/:id">
          <UserPage />
        </Route>
        <Route>
          <h1>Not found</h1>
        </Route>
      </Switch>
    </div>
  );
}
