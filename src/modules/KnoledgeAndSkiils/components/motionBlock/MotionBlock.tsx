import styles from './MotionBlock.module.scss';

interface MotionBlockProps {
  title: string;
  colored?: boolean;
}

export const MotionBlock = ({ title, colored }: MotionBlockProps) => (
  <div className={`${styles.container} ${colored ? styles.container_colored : null}`}>{title}</div>
);
