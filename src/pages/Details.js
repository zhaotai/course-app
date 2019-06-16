import React from "react";
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
        {`this is article ${this.props.params.id}`}
      </div>
    );
  }
}

export default Details;
