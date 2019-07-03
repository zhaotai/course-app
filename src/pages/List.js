import React from "react";
import Card from "antd/lib/card";
import Button from "antd/lib/button";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { loadList } from "../actionCreators/List";
import { Pages } from "../App";
import "../App.css";

const { Meta } = Card;
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    loadList(this.props.dispatch);
  }

  render() {
    return (
      <div className="app">
        <Button onClick={this._gotoCreate.bind(this)}>Create</Button>
        <Row>{this._getList(this.props.listStore.articles)}</Row>
      </div>
    );
  }

  _getList(articles) {
    console.log(articles);
    return articles.map(article => (
      <Col className="cardContainer" key={article.id} lg={6} md={8} sm={12} xs={24}>
        {this._getCard(article)}
      </Col>
    ));
  }
  
  _getCard(article) {
    return (
      <Card
        hoverable
        className="card"
        onClick={this._gotoDetails.bind(this, article)}
        cover={<img src={require("../logo.svg")} alt="1" />}>
          <Meta title={article.title} description={article.tags} />
      </Card>
    );
  }

  _gotoCreate() {
    this.props.history.push(Pages.Create);
  }

  _gotoDetails(article) {
    this.props.history.push(`${Pages.Details}/${article.id}`);
  }
}

export default List;
