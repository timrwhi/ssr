import React from 'react';
import { hydrate } from 'react-dom';
import App from './components/app';

/**
 * If you call ReactDOM.hydrate() on a node that already has this server-rendered markup,
 * React will preserve it and only attach event handlers, allowing you to have a
 * very performant first-load experience.
 */
hydrate(<App />, document.querySelector('body'));
