import { SocialsButton } from '@common/components/SocialsButton/SocialsButton';
import { YouTubeReactIcon } from '@common/icons/YouTubeReactIcon';
import { TelegramReactIcon } from '@common/icons/TelegramReactIcon';
import { TwitterReactIcon } from '@common/icons/TwitterReactIcon';
import { motion } from 'framer-motion';

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
    <motion.div
      className={styles.container__titleWrapper}
      initial={{ opacity: 0, x: '100%' }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <p className={styles.container__title}>Об авторе</p>
      <p className={styles.container__titleHighlited}>Курса и академии</p>
    </motion.div>
    <motion.div className={styles.container__authorCard}>
      <motion.img
        className={styles.container__image}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        src='/Mr._Krabs.png'
        alt='mrCrabs_image'
      />
      <p className={styles.container__authorCardName}>Mr. Crabs</p>
      <p className={styles.container__authorCardContent}>Автор курса</p>
    </motion.div>
    <motion.p
      className={styles.container__mainContent}
      initial={{ opacity: 0, x: '100%' }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      За последние 5 лет был получен бесценный опыт как в области инвестиций в
      тяжелом мире криптовалюты, так и в образовательной деятельности, выпустив огромное количество успешных потоков учеников.
    </motion.p>
    <div className={styles.container__buttons}>
      {buttonsArray.map((button, index) => (
        <SocialsButton style={{ width: '47%' }} key={index} icon={button.icon} buttonIconType={button.buttonIconType}>
          {button.subscribers}
        </SocialsButton>
      ))}
    </div>
  </div>
);
