import { HtmlHTMLAttributes } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { PlusReactIcon } from '@common/icons/PlusReactIcon';

import styles from './Accordion.module.scss';

interface IAccordionProps extends HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  content: string;
  isActive: boolean;
}

export const Accordion = ({ title, content, isActive, ...props }: IAccordionProps) => (
  <div className={styles.container}>
    <div className={styles.container__titleWrapper} {...props}>
      <p className={styles.container__title}>{title}</p>
      <motion.div
        className={`${styles.container__icon} ${styles[isActive ? 'container__icon_colored' : '']}`}
        animate={{ rotate: isActive ? -45 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <PlusReactIcon color={isActive ? 'black' : '#6ede51'} size={33} />
      </motion.div>
    </div>
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }}
        >
          <p className={styles.container__content}>{content}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);
