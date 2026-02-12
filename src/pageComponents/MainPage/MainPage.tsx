'use client';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <main>
      <div className={styles.root}>
        <div className={styles.imgContainer}>
          <a href='https://nextjs.org/' target='_blank'>
            <Image
              src={'/next.svg'}
              className={styles.logo}
              alt='nextjs-logo'
              width={150}
              height={70}
              unoptimized
            />
          </a>
          <a href='https://react.dev' target='_blank'>
            <Image
              src={'/react.svg'}
              className={clsx(styles.logo, styles.react)}
              alt='react-logo'
              width={150}
              height={150}
              loading='eager'
            />
          </a>
        </div>

        <div className={styles.badgeWrapper}>
          <a href='https://github.com/StoryTW/nextjs-template-by-story' target='_blank'>
            <Image
              src='https://img.shields.io/badge/github-repo-blue?logo=github&labelColor=white&color=blue&logoColor=000000'
              alt='github-badge'
              width={97}
              height={20}
              unoptimized
            />
          </a>
          <Image
            src='https://img.shields.io/badge/version-1.0.0-white?labelColor=FFFFFF&color=green&style=flat'
            alt='version-badge'
            width={90}
            height={20}
            unoptimized
          />
        </div>

        <h1 className={styles.title}>NextJS Template by Story</h1>

        <div className={styles.stack}>
          <a href='https://nextjs.org/'>
            <Image
              src='https://img.shields.io/static/v1?label=next.js&message=16.1.6&style=for-the-badge&labelColor=ffffff&logo=nextjs&color=0070F3'
              alt='nextjs-badge'
              width={141}
              height={28}
              unoptimized
            />
          </a>
          <a href='https://reactjs.org/'>
            <Image
              src='https://img.shields.io/static/v1?label=React&message=19.2.3&style=for-the-badge&labelColor=FFFFFF&logo=react&color=61DAFB'
              alt='react-badge'
              width={147}
              height={28}
              unoptimized
            />
          </a>
          <a href='https://www.typescriptlang.org/'>
            <Image
              src='https://img.shields.io/static/v1?label=TypeScript&message=5&style=for-the-badge&labelColor=FFFFFF&logo=typescript&color=3178C6'
              alt='ts-badge'
              width={147}
              height={28}
              unoptimized
            />
          </a>
          <a href='https://sass-lang.com/'>
            <Image
              src='https://img.shields.io/static/v1?label=SASS&message=1.97.3&style=for-the-badge&labelColor=FFFFFF&logo=sass&color=BF3F7F'
              alt='sass-badge'
              width={140}
              height={28}
              unoptimized
            />
          </a>
        </div>
      </div>
    </main>
  );
};
