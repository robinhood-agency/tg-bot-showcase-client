import { Form } from './components/Form/Form';

import styles from './Contacts.module.scss';

export const Contacts = () => (
  <div className={styles.container}>
    <div className={styles.container__main}>
      <p className={styles.container__title}>Связаться с нами</p>
      <p className={styles.container__content}>
        Если у вас есть вопросы или вы хотите хотите узнать, какую программу обучения выбрать, заполните форму
      </p>
      <Form />
    </div>
  </div>
);
