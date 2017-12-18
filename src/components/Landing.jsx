/* @flow */
import React from 'react';
import styled from 'styled-components';

import Aside from './Aside';
import PersonCard from './PersonCard';

// $FlowFixMe
require('CSS/components/_landing.css');

type Props = {
  people: Array<Person>,
  searchTerm: string,
  allTags: Array<Tag>
};

type State = {
  activeTags: Array<string>
};

const CardsWrap = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-row: auto;
  grid-gap: .5rem .5rem;
`;

class Landing extends React.Component<Props, State> {
  state = {
    activeTags: []
  };

  props: Props;

  handleTagToggle = (event: Event) => {
    const target = event.target;

    if (target instanceof HTMLInputElement) {
      const newArray = this.state.activeTags;
      let index;

      if (target.checked) {
        newArray.push(target.value);
      } else {
        index = newArray.indexOf(target.value);
        newArray.splice(index, 1);
      }

      this.setState({
        activeTags: newArray
      });
    }
  };

  render() {
    const { people, searchTerm, allTags } = this.props;

    return (
      <div className="landing">
        <Aside tags={allTags} handleTag={this.handleTagToggle} />

        <main className="landing__main">
          <CardsWrap>
            {people
              .filter(
                person =>
                  `${person.name.first_name} ${person.name.last_name}`
                    .toUpperCase()
                    .includes(searchTerm.toUpperCase()) && this.state.activeTags.indexOf(`${person.tags}`) >= 1
              )
              .map(person => <PersonCard key={person.id} {...person} />)}
          </CardsWrap>
        </main>
      </div>
    );
  }
}

export default Landing;
