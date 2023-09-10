import s from './styles.module.scss';
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import LogoAplo from '@/public/media/logoaplo.svg';
// import LogoAplo from '../../../public/media/logoaplo.svg';
// import 

interface LogoProps {

};
const Logo: FC<LogoProps> = props => {
    return (<a className={s.logo} href='/'>
        <Image
            src={LogoAplo}
            alt={''}
            width={65}
            height={65}
        ></Image>
        <div className={s.logo_text}>
            APLOCOIN
        </div>
    </a>);
}

interface TopLinksProps {

};
const TopLinks: FC<TopLinksProps> = props => {
    return (<div className={s.top_links}>
        <a className={s.link} href='/donate'>
            Donate
        </a>
    </div>)
}

export interface HeaderProps {

};
export const Header: FC<HeaderProps> = props => {
    return (<div className={s.header_container}>
        <div className={`${s.header} ${s.big_header}`}>
            <Logo />
            <TopLinks />
        </div>
    </div>)
}