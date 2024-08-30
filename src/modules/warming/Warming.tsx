import styles from './Warming.module.scss';

const cards = [
  {
    title: 'Результат',
    content: 'Мы гарантируем, что каждый по завершению курса будет обладать практическими знаниями и инвестировать на ' +
      'криптовалютном рынке с умом.',
  },
  {
    title: 'Практику',
    content: 'Изучая материал курса шаг за шагом, Вы будете всегда закреплять полученные знания, после каждого урока, ' +
      'практическими действиями. Это - наша главная цель!',
  },
  {
    title: 'Поддержку',
    content: 'На всех этапах программы наши кураторы будут с Вами, поддерживая и наставляя. Именно они будут Вашим ' +
      'проводником в мир криптовалют.',
  },
  {
    title: 'Уверенность',
    content: 'Достаточно быть опытнее 95% участников криптовалютного рынка. Ваша подготовка позволит действовать увереннее ' +
      'большинства.',
  },
];

export const Warming = () => (
  <div className={styles.container}>
    <p className={styles.container__header}>
      Этот курс для тех,
    </p>
    <p className={styles.container__headerHighlited}>
      кто хочет:
    </p>
    { cards.map((card, index) => (
      <div key={index} className={styles.container__card}>
        <div className={styles.container__cardUpperText}>
          <p className={styles.container__cardNumber}>{ (++index).toString() }</p>
          <p>{ card.title }</p>
        </div>
        <p className={styles.container__cardContent}>
          { card.content }
        </p>
      </div>
    ))}
  </div>
);
