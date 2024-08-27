import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './CustomIconButton.module.scss';

interface ICustomIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

export const CustomIconButton = ({ icon, ...props }: ICustomIconButtonProps) => (
  <button className={styles.container} {...props}>
    <div>{icon}</div>
  </button>
);
