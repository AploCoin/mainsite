import styles from './desktop.module.css';
import { Murecho } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import Logo from './logo';
import LanguageSwitcher from '../language/LanguageSwitcher';
import {useTranslations} from 'next-intl';

const murecho = Murecho({ subsets: ['latin'] });
const open_sans = Open_Sans({ subsets: ['latin'] });

export default function DesktopNavigation() {
  const t = useTranslations('Menu');
  return (
    <div style={{ paddingLeft: 'clamp(4vw, 9vw, 10.55vw)', paddingRight: 'clamp(4vw, 9vw, 10.55vw)', width: '100vw' }}>
      <div className={styles['menu-container'] + ' flex flex-row justify-between'}>
        <div className='flex flex-row items-center'>
          <Logo />
          <div className='flex flex-row'>
            <a className={`${styles['url-button']} ${murecho.className}`}>{t('whatIsAplo')}</a>
            <a className={`${styles['url-button']} ${murecho.className}`}>{t('mining')}</a>
            <a className={`${styles['url-button']} ${murecho.className}`}>{t('faq')}</a>
            <a className={`${styles['url-button']} ${murecho.className}`}>{t('about')}</a>
            <a className={`${styles['url-button']} ${murecho.className}`}>{t('roadmap')}</a>
            <a className={`${styles['url-button']} ${murecho.className}`} style={{ marginRight: '0px' }}>{t('userGuides')}</a>
          </div>
        </div>
        <div className='flex flex-row'>
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <div className={`${styles['donate-button']}`}>
              <span className={`${styles['donate-text']} ${open_sans.className}`}>{t('donate')}</span>
            </div>
            <LanguageSwitcher /> 
          </div>
        </div>
      </div>
    </div>
  );
}
