/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAPIDetails } from './actionCreators';

import Header from './Header';
import Spinner from './Spinner';

type Props = {
  show: Show,
  rating: string,
  getAPIDetails: Function
};

type State = {
  apiData: {
    rating: string
  }
};

class Details extends Component<Props, State> {
  componentDidMount() {
    if (!this.props.rating) {
      this.props.getAPIDetails();
    }
  }

  props: Props;

  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    let ratingComponent;

    if (this.props.rating) {
      ratingComponent = <h3>{this.props.rating}</h3>;
    } else {
      ratingComponent = <Spinner />;
    }

    return (
      <div className="details">
        <h1>Details</h1>
        <Header />

        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}

          <img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />

          <p>{description}</p>
        </section>

        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}

// ownProps == props passed down from the parent
// In this case == `show`
const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {}; // or { apiData: '' }

  return {
    rating: apiData.rating
  };
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getAPIDetails() {
    dispatch(getAPIDetails(ownProps.show.imdbID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
