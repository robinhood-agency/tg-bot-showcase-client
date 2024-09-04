import { ButtonHTMLAttributes } from 'react';

import { CloseReactIcon } from '@common/icons/CloseReactIcon';
import { motion } from 'framer-motion';
import { CustomIconButton } from '@common/components/CustomIconButton/CustomIconButton';
import { YouTubeReactIcon } from '@common/icons/YouTubeReactIcon';
import { TelegramReactIcon } from '@common/icons/TelegramReactIcon';
import { InstagramReactIcon } from '@common/icons/InstagramReactIcon';
import { TwitterReactIcon } from '@common/icons/TwitterReactIcon';

import { CustomButton } from '@common/components/CustomButton/CustomButton';

import styles from './customSideBar.module.scss';

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
  <div className={`${styles.container} ${isOpen ? styles.container_active : ''}`}>
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
                <p className={styles.customSideBar__itemList}>{item.text}</p>
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
            <div className={styles.customSideBar__secondaryButton}>
              <CustomButton buttonType='secondary' height={51}>
                Записаться
              </CustomButton>
            </div>
            <CustomButton buttonType='fourth' height={51}>
              У меня есть вопрос
            </CustomButton>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);
