import { MotionBlock } from '../motionBlock/MotionBlock';
import { Marquee } from '@devnomic/marquee';

import '@devnomic/marquee/dist/index.css';
import styles from './HorizontalMotion.module.scss';

const motionBlockArray = [
  { title: 'Bitcoin' },
  { title: 'Ethereum', colored: true },
  { title: 'Ripple' },
  { title: 'Litecoin' },
  { title: 'Cardano', colored: true },
  { title: 'Polkadot' },
  { title: 'Chainlink' },
  { title: 'Stellar' },
  { title: 'Dogecoin', colored: true },
  { title: 'Solana' },
  { title: 'Uniswap', colored: true },
  { title: 'Terra' },
];

export const HorizontalMotion = () => (
  <div>
    <Marquee className={styles.container}>
      {motionBlockArray.map((item, index) => (
        <MotionBlock title={item.title} key={index} colored={item.colored} />
      ))}
    </Marquee>
  </div>
);
