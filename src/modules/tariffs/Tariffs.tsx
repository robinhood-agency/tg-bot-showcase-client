import { CustomButton } from '@common/components/CustomButton/CustomButton';
import { TariffsCard } from './components/TariffsCard/TariffsCard';
import { CustomLi } from './components/CustomLi/CustomLi';
import { motion } from 'framer-motion';

import styles from './Tariffs.module.scss';

const TariffsListPrimaryArray = [
  { content: '5 модулей программы обучения в видео формате' },
  { content: 'Домашние задания к каждому уроку' },
  { content: 'Доступ к закрытому телеграм каналу' },
  { content: 'Обратная связь 24/7 от куратора' },
  { content: 'Доступ к материалам курса 6 месяцев с начала обучения' },
];

const TariffsListSecondaryArray = [
  { content: '7 модулей программы обучения' },
  { content: 'Закрытый чат с самим мистером Крабсом' },
  { content: 'Обратная связь от сотрудников команды Crabs Academy 24/7' },
  { content: 'Еженедельные вебинары с мистером Крабсом весь период обучения' },
  { content: 'Доступ к материалам курса навсегда' },
];

const TariffsCardArray = [
  {
    title: 'Crab junior',
    content: TariffsListPrimaryArray.map((item, index) => <CustomLi key={index} content={item.content} />),
    button: (
      <CustomButton height={55} buttonType='secondary'>
        Выбрать тариф
      </CustomButton>
    ),
  },
  {
    title: 'Krusty Krabs owner',
    content: TariffsListSecondaryArray.map((item, index) => <CustomLi key={index} content={item.content} />),
    button: (
      <CustomButton height={55} buttonType='secondary'>
        Выбрать тариф
      </CustomButton>
    ),
  },
];

export const Tariffs = () => (
  <div className={styles.container}>
    <motion.p
      className={styles.container__title}
      initial={{ opacity: 0, x: '100%' }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      Выберите подходящий тариф обучения
    </motion.p>
    {TariffsCardArray.map((item, index) => (
      <TariffsCard key={index} title={item.title} content={item.content} button={item.button} />
    ))}
  </div>
);
