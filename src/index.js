import webp from './steve-after-a-workshop.jpg?h=400;800&format=webp&as=metadata';
import jpg from './steve-after-a-workshop.jpg?h=400&as=metadata';

console.log(webp);
console.log(jpg);

const img = document.createElement('img');
img.src = webp;

document.querySelector('#content').appendChild(img);

console.log('hello from index.js');

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
}); // this one return a Promise
