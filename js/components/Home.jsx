/* @flow */
import React from 'react';

// --- Components
import ArticleCard from './ArticleCard';

require('CSS/components/home.css'); // eslint-disable-line
require('CSS/components/pagination.css'); // eslint-disable-line

type Props = {
  articles: Array<ArticleType>
}

class Home extends React.Component<Props, *> {
  state = {
    currentPage: 1,
    itemsPerPage: 6
  }

  props: Props;

  handleClick = (event: HTMLButtonElement) => {
    event.preventDefault();

    this.setState({
      currentPage: Number(event.target.value)
    })
  }

  render() {
    const { currentPage, itemsPerPage } = this.state;
    const { articles } = this.props;

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentItems = articles.slice(indexOfFirst, indexOfLast);

    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(articles.length / itemsPerPage); i += 1) {
      const j = i + 1;

      pageNumbers.push(j);
    }

    return (
      <div className="home">
        <div className="home__article-list">
          {currentItems.map(
            article => <ArticleCard key={article.ID} {...article} />
          )}
        </div>

        <nav className="pagination">
          {pageNumbers.map(
            (number) => (
              <button key={number} onClick={this.handleClick} value={number} className={currentPage === number ? 'active' : ''}>
                {number}
              </button>
            )
          )}
        </nav>
      </div>
    )
  }
}

export default Home;
