import React from "react";
import List from "./pages/List";
import Details from "./pages/Details";
import CreatePost from "./pages/CreatePost/index";
import "./App.css";

export const Pages = {
  List: "list",
  Details: "details",
  Create: "create"
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: {
        current: Pages.List,
        params: {}
      }
    };
  }

  render() {
    return (
      <div className="app">
        {this._getPage(this.state.route)}
      </div>
    );
  }

  _getPage(route) {
    switch(route.current) {
      case Pages.List: return <List params={route.params} goto={this._goto.bind(this)} />;
      case Pages.Details: return <Details params={route.params} goto={this._goto.bind(this)} />;
      case Pages.Create: return <CreatePost params={route.params} goto={this._goto.bind(this)} />;
      default:
        return <List params={route.params} />;
    }
  }

  _goto(page, params) {
    this.setState({
      route: {
        current: page,
        params
      }
    });
  }
}

export default App;
