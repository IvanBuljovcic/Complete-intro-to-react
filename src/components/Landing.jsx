/* @flow */
import React from 'react';
import styled from 'styled-components';

import Aside from './Aside';
import PersonCard from './PersonCard';

// $FlowFixMe
require('CSS/components/_landing.css');

type Props = {
  props: {
    people: Array<Person>,
    searchTerm: string,
    tags: Array<string>
  }
};

type State = {
  activeTags: Array<string>
}

const CardsWrap = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-row: auto;
  grid-gap: .5rem .5rem;
`;

class Landing extends React.Component<Props, State> {
  state = {
    activeTags: []
  }

  handleTagToggle = (event: SyntheticEvent<HTMLButtonElement> & { target: HTMLBaseElement }) => (
    let newActiveTags = this.state.activeTags;

    newActiveTags.push(event.target.value)

    this.setState({
      activeTags: newActiveTags
    })
  );

  render() {
    return (
      <div className="landing">
    <Aside tags={this.props.tags} />

    <main className="landing__main">
      <h1>
        {this.props.searchTerm}
      </h1>

      <CardsWrap>
        {this.props.people
          .filter(person =>
            `${person.name.first_name} ${person.name.last_name}`.toUpperCase().includes(this.props.searchTerm.toUpperCase())
          )
          .map(person => <PersonCard key={person.id} {...person} />)}
      </CardsWrap>
    </main>
  </div>
    )
  }
}

export default Landing;
