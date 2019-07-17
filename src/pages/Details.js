import React from "react";
import Button from "antd/lib/button";
import { Pages } from "../App";
import "../App.css";

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="app">
        {JSON.stringify(this.props.match.params)}
        {JSON.stringify(this.props.listStore.articles[this.props.match.params.id])}
        <Button onClick={() => this.props.history.go(-1)}>go back</Button>
      </div>
    );
  }

  toString(article) {
    return JSON.stringify(article);
  }
}

export default Details;
