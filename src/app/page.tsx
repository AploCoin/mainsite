'use client';
import Image from 'next/image'
import { Header } from '@/widgets/Header';
import { Background } from '@/widgets/Background';
import s from './styles.module.scss';
import LogoAplo from '@/public/media/logoaplo.svg';
import { FC, useEffect, useState } from 'react';

interface AboutProps { };
const About: FC<AboutProps> = props => {
  return (<Background>
    <div className={s.about_container}>
      <div className={s.about_logo_container}>
        <Image
          src={LogoAplo}
          alt={''}
          // width={300}
          // height={300}
          className={s.about_logo}
        ></Image>
      </div>
      <div className={s.about_panel}>
        <div className={s.about_header}>
          APLO - Art Of Simplicity
        </div>
        <div className={s.about_text}>
          A decentralized cryptocurrency, aimed at enabling mining on slow devices and bringing innovation into PoW world.
        </div>
        <div className={s.about_buttons}>
          <a
            className={s.button}
            target="_blank"
            rel="noopener noreferrer"
            href="/about"
          >
            About
          </a>
          <a
            className={s.button}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AploCoin"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  </Background>)
};


export default function Home() {
  return (
    <main>
      <div className={s.main_container}>
        <Header />
        <div className={s.main_area}>
          <About />
        </div>
      </div>
    </main>
  )
}
