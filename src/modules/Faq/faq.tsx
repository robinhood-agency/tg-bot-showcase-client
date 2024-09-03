import { AccordionWrapper } from '@modules/Faq/components/AccordionWrapper/AccordionWrapper';

import styles from './faq.module.scss';

export const Faq = () => (
  <div className={styles.container}>
    <p className={styles.container__titleHighlited}>Ответы</p>
    <p className={styles.container__title}>на часто задаваемые вопросы</p>
    <AccordionWrapper />
  </div>
);
