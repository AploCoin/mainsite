import styles from './desktop.module.css';
import { Murecho } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import LanguageSwitcher from '../language/LanguageSwitcher';
import {useTranslations} from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const murecho = Murecho({ subsets: ['latin', 'cyrillic'] });
const open_sans = Open_Sans({ subsets: ['latin', 'cyrillic'] });

export default function DesktopNavigation() {
  const t = useTranslations('Menu');
  const pathname = usePathname();
  const lang = pathname.substring(1, 3);

  return (
    <div style={{ paddingLeft: 'clamp(4vw, 9vw, 10.55vw)', paddingRight: 'clamp(4vw, 9vw, 10.55vw)', width: '100vw' }}>
      <div className={styles['menu-container'] + ' flex flex-row justify-between'}>
        <div className='flex flex-row items-center'>
          <Image src="/menu/logo.png" width={6} height={3} alt="AploCoin logo" className={styles.logo}/>
          <div className={`flex flex-row ${styles[`${lang}-lang`]}`}>
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
