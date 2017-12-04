import React from 'react';
import { render } from 'react-dom';

/* --- Components --- */
import App from './App';

/* --- Render application --- */
const renderApp = () => {
  render(<App />, document.getElementById('app'));
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
