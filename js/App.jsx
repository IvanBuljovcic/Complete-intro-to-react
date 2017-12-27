/* @flow */

import React from 'react';
import { render } from 'react-dom';

/* --- Components --- */
import Routing from './components/Routing';

/* --- Render application --- */
const renderApp = () => {
  // $FlowFixMe
  render(<Routing />, document.getElementById('app'));
};

renderApp();

/**
 * Only for DEV
 *
 * If Hot Module Loading is enabled,
 * render the whole app
 *
 * ------
 *
 * the `module` variable is comming from webpack itself
 */
if (module.hot) {
  module.hot.accept('./components/Routing', () => {
    renderApp();
  });
}
