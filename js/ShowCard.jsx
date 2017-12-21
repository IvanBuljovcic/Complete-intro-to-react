/* @flow */

// --- Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; // !!!
/* Removed by @flow
  import { string } from 'prop-types'; // Excluded from React
*/

const borderColor = '#333';

// Tagged template literal
// Gets run through autoprefixer
const Wrapper = styled((Link: any))`
  width: 32%;
  padding-right: 10px;
  margin-bottom: 25px;
  border: 2px solid ${borderColor};
  border-radius: 4px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

class ShowCard extends Component<*, *> {
  shouldComponentUpdate() {
    return false;
  }

  props: Show;

  render() {
    return (
      <Wrapper to={`/details/${this.props.imdbID}`} className="show-card">
        <Image src={`/public/img/posters/${this.props.poster}`} alt={`${this.props.title} Show Poster`} />
        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.props.description}</p>
        </div>
      </Wrapper>
    );
  }
}

/* Removed by @flow
  // --- As Interface in Angular 2 ---
  // If optional, AirBnB requires that it has a default value
  ShowCard.propTypes = {
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired
  };
*/

export default ShowCard;
