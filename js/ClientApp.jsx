/* @flow */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/* --- Components --- */
import App from './App';

/* --- Render application --- */
const renderApp = () => {
  // $FlowFixMe
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
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
  module.hot.accept('./App', () => {
    renderApp();
  });
}
