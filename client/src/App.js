import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <>
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
        </>
      </Router>
    );
  }
}

export default App;
