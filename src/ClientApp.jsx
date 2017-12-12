// @flow

import * as React from 'react';
import { render } from 'react-dom';

// --- Components
import Routing from './Routing';

/* --- Render App --- */
const rootElement = document.getElementById('app');

if (!(rootElement instanceof Element)) throw new Error('invalid type');

render(<Routing />, rootElement);
