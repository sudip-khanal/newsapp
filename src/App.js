import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  apikey = process.env.REACT_NEWS_APP_API;

  render() {
    return (
      <div>
        <Router>
          <Navbar />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <News
                key="general"
                pageSize={5}
                apikey={this.apikey}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                pageSize={5}
                apikey={this.apikey}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                pageSize={5}
                apikey={this.apikey}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News
                key="health"
                pageSize={5}
                apikey={this.apikey}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                pageSize={5}
                apikey={this.apikey}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                key="sports"
                pageSize={5}
                apikey={this.apikey}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                pageSize={5}
                apikey={this.apikey}
                country="in"
                category="technology"
              />
            </Route>
            <Route exact path="/general">
              <News
                key="general"
                pageSize={5}
                apikey={this.apikey}
                country="in"
                category="general"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
