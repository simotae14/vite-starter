import styles from './banner.module.css';

export const addBanner = (text: string) => {
  const container = document.querySelector('#content') as HTMLDivElement;
  container.classList.add(styles.bannerText);
  container.textContent = text;
};

export default addBanner;
