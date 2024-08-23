import styles from './CustomButton.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ICustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'primary' | 'secondary' | 'third',
  children: ReactNode,
}

export const CustomButton = (props: ICustomButtonProps) => {
  const { children, buttonType = 'primary', ...restProps } = props;

  return (
    <button
      className={`${styles.customButton} ${styles[`customButton_${buttonType}`]}`}
      {...restProps}
    >
      {children}
    </button>
  );
};
