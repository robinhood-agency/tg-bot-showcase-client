import styles from './Landing.module.scss';
import { CustomButton } from '@common/components/CustomButton/CustomButton';

export const Landing = () => (
  <div className={styles.container}>
    <span className={styles.container__catchyText}>
      Пройди путь от криптохомячка <br />
      <div className={styles.container__highlitedText}>до владыки вселенной</div>
    </span>
    <div className={styles.container__courseInfo}>
      Курс от самого гениального крипто гения, который только мог появиться на свет, покупайте!
    </div>
    <img className={styles.container__image} src='../../../public/MrCrabs.png' alt='robin_hood_image' />
    <span className={styles.container__courseDetails}>
      Старт курса: СКОРО <br />
      <span> Продолжительность: 3 месяца </span>
    </span>
    <div className={styles.container__buttonContainer}>
      <CustomButton buttonType='third' >
        Стать участником
      </CustomButton>
    </div>
  </div>
);
