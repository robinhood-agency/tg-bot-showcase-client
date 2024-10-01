import { useState } from 'react';

import { SideBarReactIcon } from '@common/icons/SideBarReactIcon';
import { CustomSideBar } from './components/CustomSideBar/CustomSideBar';
import { AnimatePresence } from 'framer-motion';

import styles from './Header.module.scss';

export const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <header className={styles.container}>
      <p className={styles.container__title}>Krabs Academy</p>
      <button className={styles.container__button} onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
        <SideBarReactIcon />
      </button>
      <AnimatePresence>
        {isSideBarOpen &&
          <CustomSideBar
            isOpen={isSideBarOpen}
            onClose={() => setIsSideBarOpen(false)}
          />
        }
      </AnimatePresence>
    </header>
  );
};
