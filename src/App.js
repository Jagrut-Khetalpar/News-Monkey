import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// React class component
export default class App extends Component {
  pageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <LoadingBar
              color="#f11946"
              progress={this.state.progress}
              height={3}
            />
          </div>
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                conuntry="in"
                category="general"
                apiKey={this.apiKey}
              />
            </Route>

            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                country="in"
                category="business"
                apiKey={this.apiKey}
              />
            </Route>

            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
                apiKey={this.apiKey}
              />
            </Route>

            <Route exact path="/general">
              <News
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                country="in"
                category="general"
                apiKey={this.apiKey}
              />
            </Route>

            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                country="in"
                category="health"
                apiKey={this.apiKey}
              />
            </Route>

            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                country="in"
                category="science"
                apiKey={this.apiKey}
              />
            </Route>

            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                country="in"
                category="technology"
                apiKey={this.apiKey}
              />
            </Route>

            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                country="in"
                category="sports"
                apiKey={this.apiKey}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
