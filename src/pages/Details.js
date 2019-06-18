import React from "react";
import Button from "antd/lib/button";
import { Pages } from "../App";
import "../App.css";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null
    };
  }

  render() {
    return (
      <div className="app">
        {JSON.stringify(this.props.params.article)}
        <Button onClick={() => this.props.goto(Pages.List)}>go back</Button>
      </div>
    );
  }
}

export default Details;
