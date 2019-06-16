import React from "react";
import Card from "antd/lib/card";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import logo from "../logo.svg";
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
    const articles = dataLayer.getArticles();
    this.setState({
      articles
    });
  }

  render() {
    return (
      <div className="app">
        <Row>{this._getList(this.state.articles)}</Row>
      </div>
    );
  }

  _getList(articles) {
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
        onClick={this._gotoDetails.bind(this, article.id)}
        cover={<img src={logo} />}>
          <Meta title={article.title} description={article.description} />
      </Card>
    );
  }

  _gotoDetails(id) {
    this.props.goto(Pages.Details, { id });
  }
}

export default List;
