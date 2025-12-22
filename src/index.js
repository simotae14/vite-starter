console.log(import.meta.env);

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
}); // this one return a Promise
