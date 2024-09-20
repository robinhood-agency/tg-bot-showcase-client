import { ReactNode } from 'react';

import { motion } from 'framer-motion';

import styles from './AdvantagesCard.module.scss';

interface IAdvantagesCard {
  picture: ReactNode;
  title: string;
  content: string;
}

export const AdvantagesCard = ({ picture, title, content }: IAdvantagesCard) => (
  <div className={styles.container}>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
    >
      {picture}
    </motion.div>
    <motion.div
      className={styles.container__textWrapper}
      initial={{ opacity: 0, x: '100%' }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <p className={styles.container__title}>{title}</p>
      <p className={styles.container__content}>{content}</p>
    </motion.div>
  </div>
);
