/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Wrap = styled((Link: any)) `
  border: 2px solid #000;

  overflow: hidden;

  color: #000;
  text-decoration: none;
`;

class ArticleCard extends React.Component<ArticleTypeProps, *> {
  shouldComponentUpdate() {
    return false;
  }

  props: ArticleType;

  render() {
    const { articleName, title, text, createdAt } = this.props;

    return (
      <Wrap to={`/article/${articleName}`}>
        <h1>{title}</h1>
        <p>{text.slice(0, 120)}</p>
        <span>{createdAt}</span>
      </Wrap>
    )
  }
}

export default ArticleCard;
