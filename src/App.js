import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from "./pages/List";
import Details from "./pages/Details";
import CreatePost from "./pages/CreatePost/index";
import { connect } from "./stores";
import "./App.css";

export const Pages = {
  List: "/",
  Details: "/details",
  Create: "/create"
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={Pages.List}>Home</Link>
              </li>
            </ul>
          </nav>
          <Route path={Pages.List} exact render={routeProps => <List {...routeProps} {...this.props.store.getState()} dispatch={this.props.store.dispatch} />} />
          <Route path={`${Pages.Details}/:id`} exact render={routeProps => <Details {...routeProps} {...this.props.store.getState()} dispatch={this.props.store.dispatch} />} />
          <Route path={Pages.Create} exact component={CreatePost} />
        </div>
      </Router>
    );
  }
}

export default connect(App);
