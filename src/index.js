import addBanner from './banner?raw';

console.log(addBanner);

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
}); // this one return a Promise
