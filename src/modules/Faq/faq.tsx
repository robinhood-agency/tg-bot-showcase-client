import { AccordionWrapper } from '@modules/Faq/components/AccordionWrapper/AccordionWrapper';
import { motion } from 'framer-motion';

import styles from './faq.module.scss';

export const Faq = () => (
  <div className={styles.container}>
    <motion.div
      className={styles.container__titleWrapper}
      initial={{ opacity: 0, x: '100%' }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <p className={styles.container__titleHighlited}>Ответы</p>
      <p className={styles.container__title}>на часто задаваемые вопросы</p>
    </motion.div>
    <AccordionWrapper />
  </div>
);
