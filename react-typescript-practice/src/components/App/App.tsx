import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../Home/Home";
import Header from "../Header/Header";
import Guess from "../Guess/Guess";
import CompoundInterest from "../CompoundInterest/CompoundInterest";
import Calories from "../Calories/Calories";
import BookSite from "../BookSite/BookSite";
// Bootstrap version 4.3.1
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <main>
      <Router>
        <Header headerTitle="React TypeScript Playground" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/compound-interest" exact component={CompoundInterest} />
          <Route path="/book-site" exact component={BookSite} />
          <Route path="/guess" exact component={Guess} />
          <Route path="/calories" exact component={Calories} />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
