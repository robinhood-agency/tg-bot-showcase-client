import { motion } from 'framer-motion';

import styles from './catchyInfo.module.scss';

const infoArray = [
  {
    number: 435,
    title: 'Довольных учеников',
  },
  {
    number: 89,
    title: 'Страниц материалов',
  },
  {
    number: 6,
    title: 'Учебных модулей',
  },
  {
    number: 45,
    title: 'Приглашенных экспертов',
  },
  {
    number: 25,
    title: 'Человек в команде',
  },
  {
    number: 89,
    title: 'Видеоуроков',
  },
];

export const CatchyInfo = () => (
  <div className={styles.container}>
    <motion.p
      className={styles.container__title}
      initial={{ opacity: 0, x: '100%' }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      Курс в цифрах:
    </motion.p>
    <div className={styles.container__numbers}>
      {infoArray.map((item, index) => (
        <div key={index} className={styles.container__numbersItem}>
          <motion.p
            className={styles.container__itemNumber}
            initial={{ opacity: 0, x: '100%' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {item.number.toString()}
          </motion.p>
          <motion.p
            className={styles.container__itemTitle}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {item.title}
          </motion.p>
        </div>
      ))}
    </div>
  </div>
);
