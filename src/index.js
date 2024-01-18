console.log('hello from index.js');

import { initializeCounter } from './counter.js';

initializeCounter(); // initialize the counter

// override the h2 text
document.querySelector('h2').textContent = 'Hello from index.js';
