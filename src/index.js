import styles from './banner.module.css?url';

console.log(styles);

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
}); // this one return a Promise
