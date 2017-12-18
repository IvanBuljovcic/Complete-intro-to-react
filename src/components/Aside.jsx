/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  tags: Array<string>
};

const Item = styled.button`
  display: block;
  width: 80%;
  margin: .5rem 0;

  font-size: 1.4rem;
`;

class Aside extends React.Component<Props, *> {
  state = {
    buttons: [
      { id: 1, name: 'black', isActive: false },
      { id: 2, name: 'white', isActive: false },
      { id: 3, name: 'red', isActive: false },
      { id: 4, name: 'green', isActive: false },
      { id: 5, name: 'blue', isActive: false },
      { id: 6, name: 'yellow', isActive: false },
      { id: 7, name: 'cyan', isActive: false },
      { id: 8, name: 'magenta', isActive: false },
      { id: 9, name: 'pink', isActive: false },
      { id: 10, name: 'firebrick', isActive: false },
      { id: 11, name: 'papayawhip', isActive: false },
      { id: 12, name: 'lime', isActive: false }
    ]
  };

  render() {
    return (
      <aside className="landing__aside">
        <h1>Aside component</h1>

        <div>
          <form>
            {this.props.tags.map(tag => <Item key={index}>{tag}</Item>)}
          </form>
        </div>
      </aside>
    );
  }
}

export default Aside;
