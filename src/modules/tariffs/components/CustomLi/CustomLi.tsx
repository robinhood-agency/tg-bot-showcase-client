import { ReactNode } from 'react';

import styles from './CustomLi.module.scss';

interface ICustomLiProps {
  content: ReactNode;
}

export const CustomLi = ({ content }: ICustomLiProps) => (
  <li className={styles.container}>
    <div className={styles.container__square} />
    {content}
  </li>
);
