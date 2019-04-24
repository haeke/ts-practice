import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../Home/Home";
import Header from "../Header/Header";
import CompoundInterest from "../CompoundInterest/CompoundInterest";
import BookSite from "../BookSite/BookSite";
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
            <Route path="/book-site" exact component={BookSite} />
          </Switch>
        </Router>
      </div>
    </main>
  );
};

export default App;
