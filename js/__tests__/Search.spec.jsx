import React from 'react';
import { shallow } from 'enzyme';

// Data
import preload from '../../data.json';

// Components
import Search from '../Search';
import ShowCard from '../ShowCard';

/* --- Example of using with `describe` --- */
/*
  describe('Search', () => {
    it('Search renders correctly', () => {
      // Stuff
    });

    it('Search should render correct ammount of shows', () => {
      // Stuff
    });

    it('Search should render correct ammount of shows based on search term', () => {
      // Stuff
    });
  });
*/

/**
 * .find(value)
 *
 * value can be either a class, HTML selector or React component
 */

test('Search renders correctly', () => {
  const component = shallow(<Search shows={preload.shows} />);

  expect(component).toMatchSnapshot();
});

test('Search should render correct ammount of shows', () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search should render correct ammount of shows based on search term', () => {
  const searchWord = 'black';
  const component = shallow(<Search shows={preload.shows} />);
  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
  ).length;

  component.find('input').simulate('change', { target: { value: searchWord } });

  expect(component.find(ShowCard).length).toEqual(showCount);
});
