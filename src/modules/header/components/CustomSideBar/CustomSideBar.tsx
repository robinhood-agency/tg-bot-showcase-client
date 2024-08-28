import { ButtonHTMLAttributes } from 'react';

import { CloseReactIcon } from '@common/icons/CloseReactIcon';
import { motion } from 'framer-motion';
import { CustomIconButton } from '@common/components/CustomIconButton/CustomIconButton';
import { YouTubeReactIcon } from '@common/icons/YouTubeReactIcon';
import { TelegramReactIcon } from '@common/icons/TelegramReactIcon';
import { InstagramReactIcon } from '@common/icons/InstagramReactIcon';
import { TwitterReactIcon } from '@common/icons/TwitterReactIcon';

import styles from './customSideBar.module.scss';
import { CustomButton } from '@common/components/CustomButton/CustomButton';

const navListArray = [{ text: 'Об авторе' }, { text: 'Программа' }, { text: 'Тарифы' }];
const iconsArray = [
  { icon: <YouTubeReactIcon />, Link: 'https://www.youtube.com/' },
  { icon: <TelegramReactIcon />, Link: 'https://desktop.telegram.org/' },
  { icon: <TwitterReactIcon />, Link: 'https://x.com/?lang=ru' },
  { icon: <InstagramReactIcon />, Link: 'https://www.instagram.com/' },
];

interface ICustomSideBarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

export const CustomSideBar = ({ onClose, isOpen }: ICustomSideBarProps) => (
  <motion.div
    className={styles.customSideBar}
    initial={{ x: '100%' }}
    animate={{ x: isOpen ? 0 : '100%' }}
    exit={{ x: '100%' }}
    transition={{ type: 'just' }}
  >
    <div className={styles.customSideBar__container}>
      <button className={styles.customSideBar__buttonClose} onClick={onClose}>
        <CloseReactIcon />
      </button>
      <nav>
        <ul className={styles.customSideBar__list}>
          {navListArray.map((item, index) => (
            <li key={index}>
              <h1 className={styles.customSideBar__itemList}>{item.text}</h1>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.customSideBar__bottom}>
        <div className={styles.customSideBar__socialNetworks}>
          {iconsArray.map((item, index) => (
            <a href={item.Link} key={index}>
              <CustomIconButton icon={item.icon} />
            </a>
          ))}
        </div>
        <div className={styles.customSideBar__buttonWrapper}>
          <CustomButton buttonType='secondary'>Записаться</CustomButton>
        </div>
      </div>
    </div>
  </motion.div>
);
