/* @flow */
import React from 'react';

// --- Components
import ArticleCard from './ArticleCard';

type Props = {
  articles: Array<ArticleType>
}

const Home = (props: Props) => (
  <div className="home">
    {props.articles.map(
      article => <ArticleCard key={article.ID} {...article} />
    )}
  </div>
);

export default Home;
