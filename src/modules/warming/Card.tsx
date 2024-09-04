import styles from '@modules/warming/Warming.module.scss';

interface ICardProps {
  index: number
  card: {
    title: string,
    content: string
  }
}

export const Card = ({ card, index }: ICardProps) => (
  <div className={styles.container__card}>
    <div className={styles.container__cardUpperText}>
      <p className={styles.container__cardNumber}>{(++index).toString()}</p>
      <p>{card.title}</p>
    </div>
    <p className={styles.container__cardContent}>
      {card.content}
    </p>
  </div>
);
