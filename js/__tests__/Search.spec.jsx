import React from 'react';
import { shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../store';
import { setSearchTerm } from '../actionCreators';

// Data
import preload from '../../data.json';

// Components
import Search, { Unwrapped as UnwrappedSearch } from '../Search';
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
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm="" />);

  expect(component).toMatchSnapshot();
});

test('Search should render correct ammount of shows', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm="" />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

/*
  Same as test bellow but without user interaction
*/
test('Search should render correct ammount of shows based on search term - without redux', () => {
  const searchWord = 'black';
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm={searchWord} />);

  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
  ).length;

  expect(component.find(ShowCard).length).toEqual(showCount);
});

test('Search should render correct ammount of shows based on search term', () => {
  const searchWord = 'black';

  store.dispatch(setSearchTerm(searchWord));
  const component = render(
    <Provider store={store}>
      <MemoryRouter>
        <Search shows={preload.shows} searchTerm={searchWord} />
      </MemoryRouter>
    </Provider>
  );

  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
  ).length;

  expect(component.find('.show-card').length).toEqual(showCount);
});
