/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Async } from 'react-select';
// import styled from 'styled-components';

import { setSelectValue } from '../redux/actionCreators';

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
          <Link to="/">Back</Link>
          <h1 className="body__title">{title}</h1>
          <div className="body__description">{text}</div>
          <span>{createdAt}</span>
        </main>

        <aside>
          <form>
            <button onClick={this.handleSave}>SAVE</button>
            <button onClick={this.handlePublish}>PUBLISH</button>
            <Link to={`/edit/:articleName/:${versions.name}?`}>EDIT</Link>

            <select onChange={handleSelect} value={selectValue}>
              <option disabled value="">Choose version</option>
              {versions.map(
                version => <option key={version.key} value={version.name}>{version.name}</option>
              )}
            </select>
          </form>
        </aside>
      </div>

    )
  }
}

const mapStateToProps = state => ({ selectValue: state.selectValue });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSelect(event) {
    dispatch(setSelectValue(event.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Article);
