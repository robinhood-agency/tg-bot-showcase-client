import { useState } from 'react';

import { Accordion } from './Accordion/Accordion';
import CheckActiveAccordion from '@common/utils/CheckActiveAccordion';
import { useClickOutside } from '@common/hooks/useClickOutside';

const accordionData = [
  {
    title: 'Сколько длиться курс?',
    content: 'Наш курс длиться 7 дней',
  },
  {
    title: 'Сколько модулей можно пройти на каждом тарифе',
    content:
      'На любом тарифе вы сможете пройти все 6 модулей курса, включая дополнительные материалы в виде таблиц, полезных сервисов и других бонусов',
  },
  {
    title: 'Курс состоит только из теории?',
    content:
      'Конечно нет! Мы подготовили для вас достаточно много практики в виде домашних заданий и разборов различных инструментов, которые помогут вам лучше усвоить материл и применить его на практике в реальных проектах',
  },
  {
    title: 'Стоит ли проходить курс, если я уже не новичок',
    content:
      'Абсолютно стоит! Наш курс может помочь вам взглянуть на инвестиции через призму чужого подхода и раскрыть собственные потенциальные возможности. Кроме того, здесь вы точно найдёте единомышленников',
  },
];

export const AccordionWrapper = () => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const containerRef = useClickOutside(() => setActiveIndexes([]));

  const handleAccordionClick = (index: number) => {
    setActiveIndexes(prevIndexes => CheckActiveAccordion(prevIndexes, index));
  };

  return (
    <div style={{ paddingLeft: 20, paddingRight: 20 }} ref={containerRef}>
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
