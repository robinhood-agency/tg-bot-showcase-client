import { Card } from '@modules/warming/Card';
import { motion } from 'framer-motion';

import styles from './Warming.module.scss';

const cardsArray = [
  {
    title: 'Результат',
    content:
      'С гордостью заявляем, что после обучения не было ни одного человека, который прошел все модули ' +
      'и не начал грамотно инвестировать на рынке криптовалют',
  },
  {
    title: 'Практику',
    content:
      'Проходя модули нашего курса, вы не только будете получать теоретические знания, ' +
      'но также и практиковаться на домашних заданиях',
  },
  {
    title: 'Поддержку',
    content:
      'Наши кураторы в любой момент времени будут помогать вам при ' +
      'возникновении вопросов и сложностях с выполнением домашних заданий',
  },
  {
    title: 'Уверенность',
    content:
      'Понимая то, как работает рынок вы получите уверенность, которая даст вам оставаться ' +
      'с холодной головой даже в самых стрессовых ситуациях на рынке',
  },
];

export const Warming = () => (
  <div className={styles.container}>
    <motion.p
      className={styles.container__header}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      Этот курс для тех,
    </motion.p>

    <motion.p
      className={styles.container__headerHighlited}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      кто хочет:
    </motion.p>

    {cardsArray.map((card, index) => (
      <Card key={index} index={index} card={card} />
    ))}
  </div>
);
