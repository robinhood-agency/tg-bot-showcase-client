import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './CustomButton.module.scss';

interface ICustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'primary' | 'secondary' | 'third' | 'fourth',
  children: ReactNode,
  height: number,
}

export const CustomButton = (props: ICustomButtonProps) => {
  const { children, height, buttonType = 'primary', ...restProps } = props;

  return (
    <button
      className={`${styles.customButton} ${styles[`customButton_${buttonType}`]}`}
      style={{ height: height }}
      {...restProps}
    >
      {children}
    </button>
  );
};
