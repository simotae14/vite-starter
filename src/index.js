import image from './favicon-16x16.png';

const img = document.createElement('img');
img.src = image;

document.querySelector('#content').appendChild(img);

console.log('hello from index.js');

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
}); // this one return a Promise
