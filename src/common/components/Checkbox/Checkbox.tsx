import { InputHTMLAttributes } from 'react';

import styles from './Checkbox.module.scss';

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = ({ label, ...props }: ICheckboxProps) => (
  <label className={styles.container}>
    <input type='checkbox' {...props} />
    <span className={styles.container__checkMark} />
    {label ? (
      <a href='#'>
        <span className={styles.container__label}>{label}</span>
      </a>
    ) : null}
  </label>
);
