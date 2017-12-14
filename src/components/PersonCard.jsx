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
      <h1 className="title title--italic info__title">{`${props.name.first_name} ${props.name.last_name}`}</h1>
      <p className="info__description">{props.description}</p>
    </div>

  </article>
);

export default PersonCard;
