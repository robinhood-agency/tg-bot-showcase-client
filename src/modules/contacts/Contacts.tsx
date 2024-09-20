import { motion } from 'framer-motion';
import { Form } from './components/Form/Form';

import styles from './Contacts.module.scss';

export const Contacts = () => (
  <div className={styles.container}>
    <motion.div
      className={styles.container__main}
      initial={{ opacity: 0, x: '100%' }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <p className={styles.container__title}>Связаться с нами</p>
      <p className={styles.container__content}>
        Если у вас есть вопросы или вы хотите хотите узнать, какую программу обучения выбрать, заполните форму
      </p>
      <Form />
    </motion.div>
  </div>
);
