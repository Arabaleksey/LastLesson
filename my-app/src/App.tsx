import React from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Facts from "./components/Facts/Facts";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/facts">
          <Facts></Facts>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
