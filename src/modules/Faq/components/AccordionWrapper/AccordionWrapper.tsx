import { useState } from 'react';

import { Accordion } from './Accordion/Accordion';
import CheckActiveAccordion from '@common/utils/CheckActiveAccordion';
import { useClickOutside } from '@common/hooks/useClickOutside';

const accordionData = [
  {
    title: 'Сколько длиться курс?',
    content: 'Наш курс длится 4 месяца',
  },
  {
    title: 'Сколько модулей можно пройти на каждом тарифе',
    content:
      'Каждый тариф имеет свое количество модулей, включая дополнительные материалы, ' +
      'секретные сервисы мистера Крабса, фишки трейдинга и другие бонусы',
  },
  {
    title: 'Курс состоит только из теории?',
    content:
      'Вовсе нет! Наш курс включает в себя большое количество домашних заданий, ' +
      'с помощью которых вы сможете на практике обучиться трейдингу и подкрепить свои теоретические знания!',
  },
  {
    title: 'Стоит ли проходить курс, если я уже не новичок',
    content:
      'Конечно! Благодаря нашему курсу вы сможете расширить свои знания в мире криптовалюты, найти единомышленников, ' +
      'разобрать свои ошибки в трейдинге и получить новый опыт в этом сложном, но очень перспективном направлении',
  },
];

export const AccordionWrapper = () => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const containerRef = useClickOutside(() => setActiveIndexes([]));

  const handleAccordionClick = (index: number) => {
    setActiveIndexes(prevIndexes => CheckActiveAccordion(prevIndexes, index));
  };

  return (
    <div style={{ width: '100%' }} ref={containerRef}>
      {accordionData.map(({ title, content }, index) => (
        <Accordion
          key={index}
          title={title}
          content={content}
          isActive={activeIndexes.includes(index)}
          onClick={() => handleAccordionClick(index)}
        />
      ))}
    </div>
  );
};
