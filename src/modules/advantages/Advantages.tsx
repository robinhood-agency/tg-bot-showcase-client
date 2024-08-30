import { Computer } from '../../../public/Computer';
import { Partners } from '../../../public/Partners';
import { Practice } from '../../../public/Practice';
import { Video } from '../../../public/Video';
import { AdvantagesCard } from './comonents/AdvantagesCard/AdvantagesCard';

import styles from './Advantages.module.scss';

const AdvantagesCardArray = [
  {
    title: 'Авторский курс',
    picture: <Computer />,
    content:
      'Уникальный авторский курс, который качественно отличается от существующих на рынке. Только знания и опыт самого автора',
  },
  {
    title: 'Единомышленники',
    picture: <Partners />,
    content:
      'Мы намеренно объединяем в сообщество участников курса и кураторов, для эффективного контроля полученных знаний и обмена опытов',
  },
  {
    title: 'Практическая часть',
    picture: <Practice />,
    content: 'Каждый урок закрепляется домашними заданиями, которые проверяют опытные кураторы',
  },
  {
    title: 'Видео материалы',
    picture: <Video />,
    content: 'Вся программа курса структурирована и разделена на видео уроки',
  },
];

export const Advantages = () => (
  <div className={styles.container}>
    <p className={styles.container__title}>Преимущество курса:</p>
    {AdvantagesCardArray.map((item, index) => (
      <AdvantagesCard key={index} title={item.title} picture={item.picture} content={item.content} />
    ))}
  </div>
);
