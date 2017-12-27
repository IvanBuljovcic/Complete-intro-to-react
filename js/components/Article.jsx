/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Async } from 'react-select';
// import styled from 'styled-components';

import { getAPIDetails, setSelectValue } from '../redux/actionCreators';

require('CSS/components/article.css'); // eslint-disable-line
require('CSS/components/button.css'); // eslint-disable-line

type Props = {
  article: ArticleType,
  handleSelect: Function,
  selectValue: string
}

class Article extends React.Component<Props, *> {
  componentDidMount() {
    return false;
  }

  props: Props;

  handleSave = (event: HTMLButtonElement) => {
    event.preventDefault();

    console.log('I CANNOT SAVE! This is probably a error, since this is just a view of the article, not the edit template') // eslint-disable-line no-console
  }

  handlePublish = (event: HTMLButtonElement) => {
    event.preventDefault();

    console.log('I CANNOT PUBLISH! This is probably a error, since this is just a view of the article, not the edit template') // eslint-disable-line no-console
  }


  render() {
    const { title, text, createdAt, versions } = this.props.article;
    const { handleSelect, selectValue } = this.props;

    return (
      <div className="article">
        <main className="article__body">
          <h1 className="body__title">{title}</h1>
          <div className="body__description">{text}</div>
          <span className="body__date">Created at: {createdAt}</span>
        </main>

        <aside className="article__aside">
          <form>
            <button className="btn" onClick={this.handleSave}>SAVE</button>
            <button className="btn" onClick={this.handlePublish}>PUBLISH</button>

            <select onChange={handleSelect} value={selectValue}>
              <option disabled value="">Choose version</option>
              {versions.map(
                ver => <option key={ver.key} value={ver.name}>{ver.name}</option>
              )}
            </select>
          </form>

          <Link to={`/edit/${this.props.article.articleName}`} className="btn">EDIT</Link>
        </aside>
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.article.versions.name] ? state.apiData[ownProps.article.versions.name] : {};

  return {
    selectValue: state.selectValue,
    version: apiData
  }
};

const mapDispatchToProps = (dispatch: Function) => ({
  handleSelect(event) {
    dispatch(setSelectValue(event.target.value))
  },

  selectVersion(event) {
    dispatch(getAPIDetails(event.target.value));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Article);
