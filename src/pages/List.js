import React from "react";
import Card from "antd/lib/card";
import Button from "antd/lib/button";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import dataLayer from "../dataLayer";
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
    dataLayer.getArticles().then(res => {
      this.setState({
        articles: res.posts
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Button onClick={this._gotoCreate.bind(this)}>Create</Button>
        <Row>{this._getList(this.state.articles)}</Row>
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
    this.props.goto(Pages.Create);
  }

  _gotoDetails(article) {
    this.props.goto(Pages.Details, { article });
  }
}

export default List;
