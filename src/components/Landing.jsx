/* @flow */
import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';

// --- Components
import PersonCard from './PersonCard';

// $FlowFixMe
require('CSS/main.css');

// type Props = {
//   people: Array<Person>
// };

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas: "aside aside main main main main main main main main main main";
`;

const PersonCards = styled.main`
  display: grid;
  grid-area: main;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: .5rem .5rem;
`;

const Aside = styled.aside`
  grid-area: aside;
  background: cadetblue;
`;

// const Landing = (props: Props) => (
//   <Wrap>
//     <Aside>
//       Aside stuff
//     </Aside>

//     <PersonCards className="hero-search">
//       {props.people.map(person => <PersonCard key={person.id} {...person} />)}
//     </PersonCards>
//   </Wrap>
// );

class Landing extends React.Component<*, *> {
  state = {
    searchTerm: ''
  };

  props: {
    people: Array<Person>
  };

  handleSearchTermChange = (event: SyntheticEvent & { target: HTMLInputElement }) => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    return (
      <Wrap>
        <Aside>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
            placeholder="Search for people"
          />
        </Aside>

        <PersonCards className="hero-search">
          {this.props.people
            .filter(person =>
              `${person.name.first_name} ${person.name.last_name}`
                .toUpperCase()
                .includes(this.state.searchTerm.toUpperCase())
            )
            .map(person => <PersonCard key={person.id} {...person} />)}
        </PersonCards>
      </Wrap>
    );
  }
}

export default Landing;
