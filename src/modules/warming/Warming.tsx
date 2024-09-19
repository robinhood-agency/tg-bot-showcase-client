import { Card } from '@modules/warming/Card';
import { motion } from 'framer-motion'; // Импортируем Framer Motion
import styles from './Warming.module.scss';

const cardsArray = [
  {
    title: 'Результат',
    content:
      'Мы гарантируем, что каждый по завершению курса будет обладать практическими знаниями и инвестировать на ' +
      'криптовалютном рынке с умом.',
  },
  {
    title: 'Практику',
    content:
      'Изучая материал курса шаг за шагом, Вы будете всегда закреплять полученные знания, после каждого урока, ' +
      'практическими действиями. Это - наша главная цель!',
  },
  {
    title: 'Поддержку',
    content:
      'На всех этапах программы наши кураторы будут с Вами, поддерживая и наставляя. Именно они будут Вашим ' +
      'проводником в мир криптовалют.',
  },
  {
    title: 'Уверенность',
    content:
      'Достаточно быть опытнее 95% участников криптовалютного рынка. Ваша подготовка позволит действовать увереннее ' +
      'большинства.',
  },
];

export const Warming = () => (
  <div className={styles.container}>
    {/* Анимируем первый заголовок */}
    <motion.p
      className={styles.container__header}
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Этот курс для тех,
    </motion.p>

    {/* Анимируем второй заголовок */}
    <motion.p
      className={styles.container__headerHighlited}
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      кто хочет:
    </motion.p>

    {/* Карточки */}
    {cardsArray.map((card, index) => (
      <Card key={index} index={index} card={card} />
    ))}
  </div>
);
