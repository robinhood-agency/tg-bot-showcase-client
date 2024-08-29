import { CustomButton } from '@common/components/CustomButton/CustomButton';
import { Crabs } from '../../../public/Crabs';

import styles from './Landing.module.scss';

export const Landing = () => (
  <div className={styles.container}>
    <p className={styles.container__catchyText}>
      От криптохомячка
      <p className={styles.container__highlitedText}>до владыки мира</p>
    </p>
    <p className={styles.container__courseInfo}>
      Курс от самого гениального крипто гения, который только мог появиться на свет, покупайте!
    </p>
    <Crabs />
    <p className={styles.container__courseDetails}>
      Старт курса: СКОРО
      <p> Продолжительность: 3 месяца </p>
    </p>
    <div className={styles.container__buttonContainer}>
      <CustomButton buttonType='third' height={55} >
        Стать участником
      </CustomButton>
    </div>
  </div>
);
