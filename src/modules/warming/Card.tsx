import { motion } from 'framer-motion';

import styles from '@modules/warming/Warming.module.scss';

interface ICardProps {
  index: number;
  card: {
    title: string;
    content: string;
  };
}

export const Card = ({ card, index }: ICardProps) => (
  <motion.div
    className={styles.container__card}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <motion.div
      className={styles.container__cardUpperText}
      initial={{ opacity: 0, x: '100%' }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <p className={styles.container__cardNumber}>{(++index).toString()}</p>
      <p>{card.title}</p>
    </motion.div>

    <motion.p
      className={styles.container__cardContent}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {card.content}
    </motion.p>
  </motion.div>
);
