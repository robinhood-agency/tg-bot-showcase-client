import { Computer } from '../../../public/Computer';
import { Partners } from '../../../public/Partners';
import { Practice } from '../../../public/Practice';
import { Video } from '../../../public/Video';
import { AdvantagesCard } from './comonents/AdvantagesCard/AdvantagesCard';
import { motion } from 'framer-motion';

import styles from './Advantages.module.scss';

const AdvantagesCardArray = [
  {
    title: 'Авторский курс',
    picture: <Computer />,
    content:
      'Уникальный авторский курс, подкрепленный лишь практическим опытом, ' +
      'полученным за огромное количество лет на рынке',
  },
  {
    title: 'Единомышленники',
    picture: <Partners />,
    content:
      'Мы специально добавляем наших учеников в закрытые чаты, ' +
      'где они смогут делиться своим мнением и результатами с другими обучающимися, ведь в разы проще, ' +
      'когда ты видишь, что вокруг тебя растущее и перспективное окружение, которое хочет того же, что и ты',
  },
  {
    title: 'Практическая часть',
    picture: <Practice />,
    content:
      'Каждый видеоурок сопровождается домашним заданием, ' +
      'которое проверяют наши опытные кураторы и дают свою обратную связь',
  },
  {
    title: 'Видео материалы',
    picture: <Video />,
    content: 'Вся программа курса представлена в виде видео материалов, дабы вам было проще усвоить информацию',
  },
];

export const Advantages = () => (
  <div className={styles.container}>
    <motion.p
      className={styles.container__title}
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      Преимущества курса:
    </motion.p>
    {AdvantagesCardArray.map((item, index) => (
      <AdvantagesCard key={index} title={item.title} picture={item.picture} content={item.content} />
    ))}
  </div>
);
