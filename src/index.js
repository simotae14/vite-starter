import image from './steve-after-a-workshop.jpg';

console.log(image);

console.log('hello from index.js');

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
}); // this one return a Promise
