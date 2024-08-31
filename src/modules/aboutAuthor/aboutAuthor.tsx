import { SocialsButton } from '@common/components/SocialsButton/SocialsButton';
import { YouTubeReactIcon } from '@common/icons/YouTubeReactIcon';
import { TelegramReactIcon } from '@common/icons/TelegramReactIcon';
import { TwitterReactIcon } from '@common/icons/TwitterReactIcon';

import styles from './aboutAuthor.module.scss';

const buttonsArray = [
  {
    icon: YouTubeReactIcon(),
    buttonIconType: 'youtube',
    subscribers: 254124,
  },
  {
    icon: TelegramReactIcon(),
    buttonIconType: 'telegram',
    subscribers: 82421,
  },
  {
    icon: TwitterReactIcon(),
    buttonIconType: 'twitter',
    subscribers: 99121,
  },
];

export const AboutAuthor = () => (
  <div className={styles.container}>
    <p className={styles.container__title}>Об авторе</p>
    <p className={styles.container__titleHighlited}>Курса и академии</p>
    <div className={styles.container__authorCard}>
      <img className={styles.container__image} src="../../../public/Mr._Krabs.png" alt="mrCrabs_image" />
      <p className={styles.container__authorCardName}>Mr. Crabs</p>
      <p className={styles.container__authorCardContent}>Автор курса</p>
    </div>
    <p className={styles.container__mainContent}>
      За последние 5 лет был накоплен опыт не только в области инвестиций, подкрепленный публичным результатом,
      но и навыки в образовательной деятельности, так необходимые для усвоения материала слушателем.
    </p>
    <div className={styles.container__buttons}>
      {buttonsArray.map((button, index) => (
        <SocialsButton style={{ width: '47%' }} key={index} icon={button.icon} buttonIconType={button.buttonIconType}>
          {button.subscribers}
        </SocialsButton>
      ))}
    </div>
  </div>
);
