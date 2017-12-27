/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';

require('CSS/components/article-card.css'); // eslint-disable-line

class ArticleCard extends React.Component<ArticleTypeProps, *> {
  shouldComponentUpdate() {
    return false;
  }

  props: ArticleType;

  render() {
    const { articleName, title, text, createdAt } = this.props;

    return (
      <Link to={`/article/${articleName}`} className="article-card">
        <h1>{title}</h1>
        <p>{text.slice(0, 120)}</p>
        <span>{createdAt}</span>
      </Link>
    )
  }
}

export default ArticleCard;
