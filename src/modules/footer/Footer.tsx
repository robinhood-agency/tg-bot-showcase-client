import { CustomIconButton } from '@common/components/CustomIconButton/CustomIconButton';
import { InstagramReactIcon } from '@common/icons/InstagramReactIcon';
import { TelegramReactIcon } from '@common/icons/TelegramReactIcon';
import { TwitterReactIcon } from '@common/icons/TwitterReactIcon';
import { YouTubeReactIcon } from '@common/icons/YouTubeReactIcon';

import styles from './Footer.module.scss';

const customIconButtonArray = [
  { url: 'https://www.youtube.com/', content: <YouTubeReactIcon /> },
  { url: 'https://telegram.org/', content: <TelegramReactIcon /> },
  { url: 'https://www.instagram.com/', content: <InstagramReactIcon /> },
  { url: 'https://x.com/?lang=ru', content: <TwitterReactIcon /> },
];

export const Footer = () => (
  <footer className={styles.container}>
    <p className={styles.container__title}>Academy</p>
    <div className={styles.container__socials}>
      {customIconButtonArray.map((item, index) => (
        <a key={index} href={item.url}>
          <CustomIconButton icon={item.content} />
        </a>
      ))}
    </div>
  </footer>
);
