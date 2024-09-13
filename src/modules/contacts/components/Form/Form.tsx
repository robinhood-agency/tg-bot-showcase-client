import { Checkbox } from '@common/components/Checkbox/Checkbox';
import { CustomButton } from '@common/components/CustomButton/CustomButton';
import { CustomInput } from '@common/components/CustomInput/CustomInput';

import styles from './Form.module.scss';

export const Form = () => (
  <form className={styles.container}>
    <CustomInput label='Ваше имя' />
    <CustomInput label='E-mail' />
    <Checkbox label='Я согласен с публичной офертой и политикой конфиденциальность' />
    <CustomButton height={60} buttonType='secondary' type='submit'>
      Отправить заявку
    </CustomButton>
  </form>
);
