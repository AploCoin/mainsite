'use client';
import Image from 'next/image'
import { Header } from '@/widgets/Header';
import { Background } from '@/widgets/Background';
import s from './styles.module.scss';

export default function Home() {
  return (
    <main>
      <div className={s.main_container}>
        <Header />
        <div className={s.main_area}>
          <Background>
            <div className={s.about_container}>
              <Image
                src='/media/logoaplo.svg'
                alt={''}
                width={300}
                height={300}
              ></Image>
              <div className={s.about_panel}>
                <div className={s.about_header}>
                  APLO - Art Of Simplicity
                </div>
                <div className={s.about_text}>
                  A decentralized cryptocurrency, aimed at enabling mining on slow devices and bringing innovation into PoW world.
                </div>
              </div>
            </div>
          </Background>
        </div>
      </div>
    </main>
  )
}
