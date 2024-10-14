import { CustomButton } from '@common/components/CustomButton/CustomButton';
import { Crabs } from '../../../public/Crabs';

import styles from './Landing.module.scss';

export const Landing = () => (
  <div className={styles.container}>
    <div className={styles.container__catchyText}>
      <p>От кассира Krusty Krab</p>
      <p className={styles.container__highlitedText}>до президента Bikini Bottom</p>
    </div>
    <p className={styles.container__courseInfo}>
      Курс от самого мистера Krabs'a, который буквально позволит купаться в деньгах!
    </p>
    <Crabs />
    <div className={styles.container__courseDetails}>
      <p>Старт курса: СКОРО</p>
      <p> Продолжительность: 3 месяца </p>
    </div>
    <div className={styles.container__buttonContainer}>
      <CustomButton buttonType='third' height={55}>
        Стать участником
      </CustomButton>
    </div>
  </div>
);
