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
    <p className={styles.container__title}>Курс в цифрах:</p>
    <div className={styles.container__numbers}>
      {infoArray.map((item, index) => (
        <div key={index} className={styles.container__numbersItem}>
          <p className={styles.container__itemNumber}>{ item.number.toString() }</p>
          <p className={styles.container__itemTitle}>{ item.title }</p>
        </div>
      ))}
    </div>
  </div>
);
