import { CustomButton } from '@common/components/CustomButton/CustomButton';
import { TariffsCard } from './components/TariffsCard/TariffsCard';
import { CustomLi } from './components/CustomLi/CustomLi';

import styles from './Tariffs.module.scss';

const TariffsListPrimaryArray = [
  { content: '6 модулей программы обучения' },
  { content: 'Конспекты к урокам' },
  { content: 'Домашние задания' },
  { content: 'Доступ в закрытый телеграм-канал обучения' },
  { content: 'Ежедневная обратная связь от куратора в период обучения' },
  { content: 'Еженедельные Вебинары с куратором в период обучения' },
  { content: 'Еженедельные Вебинары с куратором в период обучения' },
  { content: 'Доступ к материалам курса 3 месяца с момента старта обучения' },
];

const TariffsListSecondaryArray = [
  { content: 'Закрытый чат с Рафаэлем' },
  { content: 'Ежедневная обратная связь от команды SATOSHI FRIENDS в чате Telegram в период обучения' },
  { content: 'Еженедельные Вебинары с Рафаэлем по самым острым вопросам в период обучения (не менее 1 часа)' },
  { content: 'Доступ к материалам курса 6 месяцев с момента старта обучения' },
  { content: 'Ежедневная обратная связь от куратора в период обучения' },
];

const TariffsCardArray = [
  {
    title: 'Сатоши',
    content: TariffsListPrimaryArray.map((item, index) => <CustomLi key={index} content={item.content} />),
    button: (
      <CustomButton height={55} buttonType='secondary'>
        Выбрать тариф
      </CustomButton>
    ),
  },
  {
    title: 'Манипулятор',
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
    <p className={styles.container__title}>Выберите подходящий тариф обучения</p>
    {TariffsCardArray.map((item, index) => (
      <TariffsCard key={index} title={item.title} content={item.content} button={item.button} />
    ))}
  </div>
);
