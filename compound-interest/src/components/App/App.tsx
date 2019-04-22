import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../Home/Home";
import Header from "../Header/Header";
import CompoundInterest from "../CompoundInterest/CompoundInterest";
// Bootstrap version 4.3.1
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <main>
      <Header headerTitle="React TypeScript Playground" />
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/compound-interest"
              exact
              component={CompoundInterest}
            />
          </Switch>
        </Router>
      </div>
    </main>
  );
};

export default App;
