import { CSSProperties, useState, useRef, useEffect } from 'react';
import styles from './Card.module.scss';
import lottie from 'lottie-web';
import clsx from 'clsx';
import { TokensTypes } from '@wonderflow/tokens';
import tkns from '@wonderflow/tokens/platforms/web/tokens.json';
import thumbnail from '@/assets/images/barcs-tamas-Ni8mGeQ2F1w-unsplash.jpg';
import lottieHeartIcon from '@/assets/images/lottie-heart.json';

type FlagsType = {
  name: string;
  color: string;
};

export type CardProps = {
  padding?: false | TokensTypes['space'];
  radius?: false | TokensTypes['radius'];
  bordered?: boolean;
  shadow?: boolean;
  highlightOnHover?: boolean;
  contentLine?: false | 2;
  flags?: FlagsType[];
  lottieHeart?: boolean;
  title: string;
  desc: string;
};

const flagsData = [
  {
    name: 'flag',
    color: 'mint',
  },
  {
    name: 'flagflag',
    color: 'pink',
  },
];

export default function Card({
  padding = 24,
  radius,
  bordered,
  shadow,
  highlightOnHover = true,
  contentLine = 2,
  flags = flagsData,
  lottieHeart = true,
  title = 'Card Title',
  desc = 'Card description Card description Card description Card description Card description Card description Card description',
}: CardProps) {
  const [hearted, setHearted] = useState(false);
  const [lottieHearted, setLottieHearted] = useState(false);
  const lottieIcon = useRef<HTMLDivElement>(null);

  const dynamicStyle: CSSProperties = {
    '--padding': padding && tkns.space[padding],
    '--radius': radius && tkns.radius[radius],
    '--contentLine': contentLine,
  };

  useEffect(() => {
    if (lottieIcon.current) {
      lottie.loadAnimation({
        container: lottieIcon.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: lottieHeartIcon,
      });

      return () => {
        lottie.destroy();
      };
    }
  }, [lottieIcon]);

  useEffect(() => {
    lottieHearted ? lottie.play() : lottie.stop();
  });

  return (
    <>
      <div
        className={styles.card}
        style={{ ...dynamicStyle }}
        data-card-bordered={bordered}
        data-card-shadow={shadow}
        data-card-highlight-hover={highlightOnHover}
      >
        <a href="#" onClick={(e) => e.preventDefault()}>
          {lottieHeart ? (
            <div className={styles.lottieWrapper}>
              <div
                className={styles.lottieIcon}
                onClick={() => setLottieHearted(!lottieHearted)}
              >
                <div ref={lottieIcon} className={styles.lottieHeart} />
              </div>
            </div>
          ) : (
            <button
              className={clsx({ [styles.heart]: true, [styles.on]: hearted })}
              aria-label={hearted ? 'remove from hearted items' : 'Heart item'}
              aria-pressed={hearted}
              onClick={() => setHearted(!hearted)}
            ></button>
          )}
          <div className={styles.thumb}>
            <img src={thumbnail} alt={title} />
          </div>
          <div className={styles.content}>
            <span className={styles.title}>{title}</span>
            <span className={styles.desc}>{desc}</span>
            <ul className={styles.flags}>
              {flags &&
                flags.map((flag) => (
                  <li className={styles[`${flag.color}`]} key={flag.name}>
                    {flag.name}
                  </li>
                ))}
            </ul>
          </div>
        </a>
      </div>
    </>
  );
}
