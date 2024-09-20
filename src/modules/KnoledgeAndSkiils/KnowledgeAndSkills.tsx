import { HorizontalMotion } from './components/HorizontalMotion/HorizontalMotion';
import { motion } from 'framer-motion';

import styles from './KnowledgeAndSkills.module.scss';

export const KnowledgeAndSkills = () => (
  <div className={styles.container}>
    <motion.p
      className={styles.container__title}
      initial={{ opacity: 0, x: '100%' }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      viewport={{ once: true }}
    >
      Знания и навыки
    </motion.p>
    <HorizontalMotion />
  </div>
);
