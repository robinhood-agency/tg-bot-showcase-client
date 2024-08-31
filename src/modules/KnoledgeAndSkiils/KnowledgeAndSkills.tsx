import { HorizontalMotion } from './components/HorizontalMotion/HorizontalMotion';

import styles from './KnowledgeAndSkills.module.scss';

export const KnowledgeAndSkills = () => (
  <div className={styles.container}>
    <p className={styles.container__title}>Знания и навыки</p>
    <HorizontalMotion />
  </div>
);
