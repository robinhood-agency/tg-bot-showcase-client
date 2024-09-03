import { ReactNode } from 'react';

import styles from './TariffsCard.module.scss';

interface TariffsCard {
  title: string;
  content: ReactNode;
  button: ReactNode;
}

export const TariffsCard = ({ title, content, button }: TariffsCard) => (
  <div className={styles.container}>
    <p className={styles.container__title}>{title}</p>
    <ul className={styles.container__content}>{content}</ul>
    <div className={styles.container__buttonWrapper}>{button}</div>
  </div>
);
