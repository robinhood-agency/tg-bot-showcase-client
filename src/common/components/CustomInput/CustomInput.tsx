import React from 'react';

import styles from './CustomInput.module.scss';

interface ICustomInputProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string,
  value?: string
}

export const CustomInput = (props: ICustomInputProps) => {
  const { label, value, ...restProps } = props;

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputContainer__input}
        id={label}
        value={value}
        placeholder={label}
        {...restProps}
      />
      <label htmlFor={label} className={styles.inputContainer__label}>{ label }</label>
    </div>
  );
};
