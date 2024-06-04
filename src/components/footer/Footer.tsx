"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Murecho, Open_Sans } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const murecho = Murecho({
  subsets: ["latin", "cyrillic"],
  variable: "--font-murecho",
});

const open_sans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-open-sans",
});

const CustomFooter = () => {
  const t = useTranslations('Footer');
  const pathname = usePathname();
  const lang = pathname.substring(1, 3);
  const [isMobile, setIsMobile] = useState(false);
  const [styles, setStyles] = useState<any>({});

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1000);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const loadStyles = async () => {
      if (isMobile) {
        const style_mobile = await import('./mobile.module.css');
        setStyles(style_mobile);
      } else {
        const style_pc = await import('./desktop.module.css');
        setStyles(style_pc);
      }
    };
    loadStyles();
  }, [isMobile]);

  return (
    <footer className={`${styles.footer} ${murecho.variable} ${open_sans.variable}`}>
      <div className={styles["main-container"]}>
        <div className="flex flex-row items-center">
          <Image
            src="/menu/logo.png"
            width={6}
            height={3}
            alt="AploCoin logo"
            className={styles.logo}
          />
          <div className={`${styles["logo-text-container"]}`}>
            <span className={`${styles["logo-text"]}`}>{t('privateDecentralized')}</span>
            <span
              className={`${styles["logo-text"]} ${styles["padding-text"]}`}
            >
              {t('keepsFinances')}
            </span>
            <span
              className={`${styles["logo-text"]} ${styles["padding-text"]}`}
            >
              {t('confidentialSecure')}
            </span>
            <span className={`${styles["logo-text"]}`}>{t('andSecure')}</span>
          </div>
        </div>
        <div className={styles["nav-container"]}>
          <h3>{t('resources')}</h3>
          <Link href={`/${lang}/what-is-aplo`}>{t('whatIsAplo')}</Link>
          <Link href={`/${lang}/mining-aplo`}>{t('mining')}</Link>
          <Link href={`/${lang}/about-aplo`}>{t('about')}</Link>
          <Link href={`/${lang}/roadmap`}>{t('roadmap')}</Link>
        </div>
        <div className={styles["nav-container"]}>
          <h3>{t('reachOut')}</h3>
          <Link href={`/${lang}/`}>{t('contact')}</Link>
        </div>
        <div className={styles["nav-container"]}>
          <h3>{t('community')}</h3>
          <Link href={`/${lang}/`}>{t('exchanges')}</Link>
        </div>
      </div>
      <div className={styles['url-container']}>
        {/* <Link href="https://github.com/AploCoin/mainsite" target="_blank" className={styles['source-code-link']}>
          {t('sourceCode')}
          <Image src="/menu/url.svg" width={9} height={8} alt="Url icon for navigation"/>
        </Link> */}
        <Link href="https://t.me/+agd5PnUnNWAyYjEy">
          <Image src="/menu/telegram.svg" alt="Telegram icon" width={15} height={15} className={styles["icon-img"]}/>
        </Link>
        <Link href="https://discord.gg/CfsneqdYBF">
          <Image src="/menu/discord.svg" alt="Discord icon" width={15} height={15} className={styles["icon-img"]}/>
        </Link>
        <Link href="https://github.com/AploCoin/">
          <Image src="/menu/github.svg" alt="Github icon" width={15} height={15} className={styles["icon-img"]}/>
        </Link>
      </div>
    </footer>
  );
};

export default CustomFooter;
