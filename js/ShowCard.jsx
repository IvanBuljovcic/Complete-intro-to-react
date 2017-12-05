/* @flow */

// --- Imports
import React from 'react';
import styled from 'styled-components'; // !!!
/* Removed by @flow
  import { string } from 'prop-types'; // Excluded from React
*/

const borderColor = '#333';

// Tagged template literal
// Gets run through autoprefixer
const Wrapper = styled.div`
  width: 32%;
  padding-right: 10px;
  margin-bottom: 25px;
  border: 2px solid ${borderColor};
  border-radius: 4px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = (props: { poster: string, title: string, year: string, description: string }) => (
  <Wrapper>
    <Image src={`/public/img/posters/${props.poster}`} alt={`${props.title} Show Poster`} />
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <p>{props.description}</p>
    </div>
  </Wrapper>
);

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
