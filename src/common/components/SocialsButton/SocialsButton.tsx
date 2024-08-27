import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './SocialsButton.module.scss';
import youtube from './Icons/youtube-logo.png';
import telegram from './Icons/telegram-logo.png';
import x from './Icons/x-logo.png';

interface ISocialsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonIcon?: string,
  children: ReactNode
}

export const SocialsButton = (props: ISocialsButtonProps) => {
  const { children, buttonIcon, ...restProps } = props;
  const determineIcon = () => buttonIcon === 'yt' ? youtube : buttonIcon === 'telegram' ? telegram : x;

  const convertToK = (subscribers: ReactNode) => {
    if (typeof subscribers === 'number') {
      return Math.round(subscribers / 1000).toString() + 'k';
    }

    return '...';
  };

  return (
    <button
      className={styles.socialsButton}
      {...restProps}
    >
      <img className={ styles.socialsButton__icon } src={ determineIcon() } alt='socialsButtonIcon' />
      <div className={ styles.subscribersContainer }>
        <span className={ styles.socialsButton__subscribers }>{ convertToK(children) }</span>
        <span>Subscribers</span>
      </div>
    </button>
  );
};
