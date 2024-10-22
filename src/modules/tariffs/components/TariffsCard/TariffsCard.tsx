import { ReactNode } from 'react';

import { motion } from 'framer-motion';

import styles from './TariffsCard.module.scss';

interface TariffsCard {
  title: string;
  content: ReactNode;
  button: ReactNode;
}

export const TariffsCard = ({ title, content, button }: TariffsCard) => (
  <div className={styles.container}>
    <motion.p
      className={styles.container__title}
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.p>
    <motion.ul
      className={styles.container__content}
      initial={{ opacity: 0, x: '100%' }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      {content}
    </motion.ul>
    <motion.div
      className={styles.container__buttonWrapper}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
    >
      {button}
    </motion.div>
  </div>
);
