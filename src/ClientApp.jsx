/* @flow */

import * as React from 'react';
import { render } from 'react-dom';

// --- Components
import Routing from './Routing';

/* --- Render App --- */
const rootElement = document.getElementById('app');

if (!(rootElement instanceof Element)) {
  throw new Error('invalid type');
}

const renderApp = () => render(<Routing />, rootElement);

renderApp(); // First render

if (module.hot) {
  module.hot.accept('./Routing', () => renderApp());
}
