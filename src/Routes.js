import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Charts from "./containers/Charts";
import SelectExample from "./example";
import DropdownExampleSearchSelectionTwo from "./states";
import InterState from "./containers/InterState";
import Ration from "./containers/RationCard";
import IntraState from "./containers/IntraState";
import AllIndia from "./containers/AllIndia";


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Login">
        <Login />
      </Route>
      <Route exact path="/Charts">
        <Charts />
      </Route>
      <Route exact path="/example">
        <SelectExample />
      </Route>
      <Route exact path="/interstate">
        <InterState />
      </Route>
      <Route exact path="/intrastate">
        <IntraState />
      </Route>
      <Route exact path="/allindia">
        <AllIndia />
      </Route>
      <Route exact path="/rationcard"><Ration /></Route>
      <Route exact path="/states">
        <DropdownExampleSearchSelectionTwo />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}