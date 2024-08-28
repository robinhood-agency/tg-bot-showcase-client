import { ButtonHTMLAttributes } from 'react';

import { CloseReactIcon } from '@common/icons/CloseReactIcon';
import { motion } from 'framer-motion';

import styles from './customSideBar.module.scss';

const navListArray = [{ text: 'Об авторе' }, { text: 'Программа' }, { text: 'Тарифы' }];

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
    </div>
  </motion.div>
);
