/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { postAPIDetails, setFormText } from '../redux/actionCreators';

type Props = {
  article: {
    title: string
  },
  handleCancel: Function,
  handleSubmit: Function,
  handleTyping: Function,
  setText: string
}

class EditArticle extends React.Component<Props, *> {
  state = {
    publish: true,
    text: ''
  }

  props: Props;

  render() {
    const { title } = this.props.article;
    const { handleTyping, setText, handleCancel, handleSubmit } = this.props;

    return (
      <div className="edit">
        <h1 className="edit__title">{title}</h1>
        <form onSubmit={handleSubmit}>
          <textarea name="edit-article" cols="30" rows="10" value={setText} onChange={handleTyping} />

          <button className="btn btn--blue" type="submit">Save</button>
          <button className="btn btn--blue" type="button" onClick={handleCancel}>Cancel</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.article.version.key] ? state.apiData[ownProps.article.version.key] : {};

  return {
    title: apiData.title,
    text: apiData.text
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  handleSubmit(event) {
    dispatch(postAPIDetails(event.target.value))
  },

  handleTyping(event) {
    dispatch(setFormText(event.target.value))
  },

  handleCancel() {
    dispatch(setFormText(''))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);
