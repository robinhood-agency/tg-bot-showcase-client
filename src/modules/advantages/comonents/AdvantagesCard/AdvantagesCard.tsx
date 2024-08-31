import { ReactNode } from 'react';

import styles from './AdvantagesCard.module.scss';

interface IAdvantagesCard {
  picture: ReactNode;
  title: string;
  content: string;
}

export const AdvantagesCard = ({ picture, title, content }: IAdvantagesCard) => (
  <div className={styles.container}>
    <div>{picture}</div>
    <div className={styles.container__textWrapper}>
      <p className={styles.container__title}>{title}</p>
      <p className={styles.container__content}>{content}</p>
    </div>
  </div>
);
