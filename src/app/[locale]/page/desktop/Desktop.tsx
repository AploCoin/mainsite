import {Murecho} from 'next/font/google';
import styles from "./desktop.module.css";
import {useTranslations} from "next-intl";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Crypto from '@/components/crypto/component';

const murecho = Murecho({subsets: ['latin', 'cyrillic']});

export default function Desktop() {
    const t = useTranslations('Index');
    const pathname = usePathname();
    const lang = pathname.substring(1, 3);
  
    return (
        <>
            <main className={styles['main-container']}>
                <div className={styles['left-side']}>
                    <img src="/main/main-image.png" className={styles["left-side-image"]}/>
                </div>
                <div className={styles['right-side']}>
                    <p className={`${styles['right-side-heading']} ${murecho.className}`}>{t('aploMeansMoney')}</p>
                    <p className={`${styles['right-side-text']} ${murecho.className}`}>{t('privateDecentralized')}</p>
                    <div className={styles['right-side-buttons']}>
                        <Link href={`/${lang}/about-aplo`} className={styles['right-side-button-link']}>
                            <button className={`${styles['right-side-button1']} ${murecho.className}`}>{t('aboutAplo')}</button>
                        </Link>
                        <Link href="#">
                            <button className={`${styles['right-side-button2']} ${murecho.className}`}>{t('joinCommunity')}</button>
                        </Link>
                    </div>
                </div>
            </main>
            <section className={styles['advantages-container']}>
                <div className={`${styles['advantages-info']} ${styles['left-advantages-info']}`}>
                    <p className={`${styles['advantages-info-heading']} ${murecho.className}`}>{t('chooseWallet')}</p>
                    <p className={`${styles['advantages-info-text']} ${murecho.className}`}>{t('walletDescription')}</p>
                </div>
                <img src="/main/advantage-image-1.png"
                    className={`${styles["advantage-image"]} ${styles["advantage-image1"]} ${styles["right-advantages-image"]}`}></img>
                <img src="/main/advantage-image-2.png"
                    className={`${styles["advantage-image"]} ${styles["left-advantages-image"]}`}></img>
                <div className={`${styles['advantages-info']} ${styles['right-advantages-info']}`}>
                    <p className={`${styles['advantages-info-heading']} ${murecho.className}`}>{t('getCoins')}</p>
                    <p className={`${styles['advantages-info-text']} ${murecho.className}`}>{t('getCoinsDescription')}</p>
                </div>
                <div className={`${styles['advantages-info']} ${styles['left-advantages-info']}`}>
                    <p className={`${styles['advantages-info-heading']} ${murecho.className}`}>{t('useCurrency')}</p>
                    <p className={`${styles['advantages-info-text']} ${murecho.className}`}>{t('useCurrencyDescription')}</p>
                </div>
                <img src="/main/advantage-image-3.png"
                    className={`${styles["advantage-image"]} ${styles["right-advantages-image"]}`}></img>
                <img src="/main/advantage-image-4.png"
                    className={`${styles["advantage-image4"]} ${styles["left-advantages-image"]}`}></img>
                <div className={`${styles['advantages-info']} ${styles['right-advantages-info']}`}>
                    <p className={`${styles['advantages-info-heading']} ${murecho.className}`}>{t('findAnswers')}</p>
                    <p className={`${styles['advantages-info-text']} ${murecho.className}`}>{t('faqDescription')}</p>
                    <Link href={`/${lang}/faq`}>
                        <button className={styles["advantage-faq-button"]}>{t('faq')}</button>
                    </Link>
                </div>
            </section>
            <section className={styles['guides-section']}>
                <div className={styles['guides-and-resources']}>
                    <p className={styles['guides-and-resources-heading']}>{t('guidesResources')}</p>
                    <p className={styles['guides-and-resources-text']}>{t('guidesResourcesDescription')}</p>
                    <Link href={`/${lang}/user-guides`}>
                        <button className={styles['guides-and-resources-button']}>{t('userGuides')}</button>
                    </Link>
                </div>
                <div className={styles['aplopedia']}>
                    <p className={styles["aplopedia-heading"]}>{t('aplopedia')}</p>
                    <p className={styles["aplopedia-text"]}>{t('aplopediaDescription')}</p>
                    <a className={styles["aplopedia-link"]}><p>{t('readAplopedia')}</p></a>
                </div>
            </section>
            <p className={`${styles["community-title"]} ${murecho.className}`}>{t('joinCommunity')}</p>
            <section className={styles['community-section']}>
                <div className={`${styles["community-advantage-info"]} ${styles["community-advantage-info-left"]}`}>
                    <p className={`${styles["community-advantage-info-heading"]} ${murecho.className}`}>{t('contribute')}</p>
                    <p className={`${styles["community-advantage-info-text"]} ${murecho.className}`}>{t('contributeDescription')}</p>
                    <button className={styles["community-advantage-button"]}>{t('contributing')}</button>
                </div>
                <img src="/main/community-image-1.png"
                    className={`${styles["community-image1"]} ${styles["community-image-right"]}`}/>
                <img src="/main/community-image-2.png"
                    className={`${styles["community-image2"]} ${styles["community-image-left"]}`}/>
                <div className={styles['community-advantages']}>
                    <div
                        className={`${styles["community-advantage-info"]} ${styles["community-advantage-info-right"]}`}>
                        <p className={`${styles["community-advantage-info-heading"]} ${murecho.className}`}>{t('researchLab')}</p>
                        <p className={`${styles["community-advantage-info-text"]} ${murecho.className}`}>{t('researchLabDescription')}</p>
                    </div>
                </div>
                <div className={styles['community-advantages']}>
                    <div
                        className={`${styles["community-advantage-info"]} ${styles["community-advantage-info-left"]}`}>
                        <p className={`${styles["community-advantage-info-heading"]} ${murecho.className}`}>{t('meetCommunity')}</p>
                        <p className={`${styles["community-advantage-info-text"]} ${murecho.className}`}>{t('meetCommunityDescription')}</p>
                        <button className={styles["community-advantage-button"]}>{t('hangouts')}</button>
                    </div>
                </div>
                <img src="/main/community-image-3.png"
                    className={`${styles["community-image3"]} ${styles["community-image-right"]}`}/>
            </section>
            <section className="mb-[2vh] flex justify-center bg-secondary p-2" style={{marginLeft: "clamp(4vw, 9vw, 10.55vw)", marginRight: "clamp(4vw, 9vw, 10.55vw)"}}>
                <Crypto />
            </section>
        </>
    );
}
