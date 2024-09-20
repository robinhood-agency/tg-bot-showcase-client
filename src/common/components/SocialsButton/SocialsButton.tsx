import { ButtonHTMLAttributes, ReactNode } from 'react';

import { convertToK } from '@common/utils/ConvertToK';
import { motion } from 'framer-motion';

import styles from './SocialsButton.module.scss';

interface ISocialsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonIconType?: string;
  children: ReactNode;
  icon: ReactNode;
}

export const SocialsButton = (props: ISocialsButtonProps) => {
  const { icon, children, buttonIconType, ...restProps } = props;

  return (
    <button className={styles.socialsButton} {...restProps}>
      <div className={`${styles.socialsButton__icon} ${styles[`socialsButton__icon_${buttonIconType}`]}`}>{icon}</div>
      <div className={styles.socialsButton__subscribersContainer}>
        <motion.span
          className={styles.socialsButton__subscribers}
          initial={{ opacity: 0, x: '100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {convertToK(children)}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: '100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Subscribers
        </motion.span>
      </div>
    </button>
  );
};
