/* @flow */
import React from 'react';

// $FlowFixMe
require('CSS/components/_person-card.css');

const PersonCard = (props: Person) => (
  <article className="person-card">
    <figure className="person-card__avatar">
      <img src={props.avatar} alt={`${props.name.first_name} ${props.name.last_name} avatar`} />
    </figure>

    <div className="person-card__info">
      <h1 className="info__title">{props.name.last_name}, {props.name.first_name}</h1>
      <p className="info__description">{props.description.slice(0, 120)}</p>
    </div>
  </article>
);

export default PersonCard;
