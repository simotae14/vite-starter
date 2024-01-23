// import { initializeCounter } from './counter.js';

console.log('hello from index.js');

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
}); // this one return a Promise
