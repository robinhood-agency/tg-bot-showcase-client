import { ButtonHTMLAttributes, ReactNode } from 'react';

import { convertToK } from '@common/utils/ConvertToK';

import styles from './SocialsButton.module.scss';

interface ISocialsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonIconType?: string,
  children: ReactNode,
  icon: ReactNode
}

export const SocialsButton = (props: ISocialsButtonProps) => {
  const { icon, children, buttonIconType, ...restProps } = props;

  return (
    <button
      className={styles.socialsButton}
      {...restProps}
    >
      <div className={ `${styles.socialsButton__icon} ${styles[`socialsButton__icon__${buttonIconType}`]}` }>
        { icon }
      </div>
      <div className={ styles.socialsButton__subscribersContainer }>
        <span className={ styles.socialsButton__subscribersContainer__subscribers }>{ convertToK(children) }</span>
        Subscribers
      </div>
    </button>
  );
};
