import styles from "./mobile.module.css";
import {Murecho} from 'next/font/google';
import {useTranslations} from "next-intl";
import { Charts } from "@/components/crypto/charts";
import Info from "@/components/crypto/info";
import { usePathname } from 'next/navigation';
import Link from "next/link";

const murecho = Murecho({subsets: ['latin', 'cyrillic']});

export default function Mobile() {
    const t = useTranslations('Index');
    const pathname = usePathname();
    const lang = pathname.substring(1, 3);


    return (
        <>
            <main className={styles["main-container"]}>
                <img src={"/main/main-image-m.png"} className={styles["main-image"]}/>
                <div className={styles["main-info"]}>
                    <p className={`${styles["main-heading"]} ${murecho.className}`}>{t('aploMeansMoney')}</p>
                    <p className={`${styles["main-text"]} ${murecho.className}`}>{t('privateDecentralized')}</p>
                </div>
                <div className={styles["main-buttons"]}>
                    <Link href={`/${lang}/about-aplo`} className={styles["main-button1"]}>{t('aboutAplo')}</Link>
                    <Link href="https://t.me/aplocoin_community" target='_blank' className={styles["main-button2"]}>{t('joinCommunity')}</Link>
                </div>
            </main>
            <section className={styles["advantages-container"]}>
                <div className={styles["advantages-info"]}>
                    <p className={`${styles["advantages-heading"]} ${murecho.className}`}>{t('chooseWallet')}</p>
                    <p className={`${styles["advantages-text"]} ${murecho.className}`}>{t('walletDescription')}</p>
                </div>
                <img src={"/main/advantage-image-1.png"} className={styles["advantage-image"]}/>
                <div className={styles["advantages-info"]}>
                    <p className={`${styles["advantages-heading"]} ${murecho.className}`}>{t('getCoins')}</p>
                    <p className={`${styles["advantages-text"]} ${murecho.className}`}>{t('getCoinsDescription')}</p>
                </div>
                <img src={"/main/advantage-image-2.png"} className={styles["advantage-image"]}/>
                <div className={styles["advantages-info"]}>
                    <p className={`${styles["advantages-heading"]} ${murecho.className}`}>{t('useCurrency')}</p>
                    <p className={`${styles["advantages-text"]} ${murecho.className}`}>{t('useCurrencyDescription')}</p>
                </div>
                <img src={"/main/advantage-image-3.png"} className={styles["advantage-image"]}/>
                <div className={styles["advantages-info"]}>
                    <p className={`${styles["advantages-heading"]} ${murecho.className}`}>{t('findAnswers')}</p>
                    <p className={`${styles["advantages-text"]} ${murecho.className}`}>{t('faqDescription')}</p>
                </div>
                <Link href={`/${lang}/faq`} className={styles["advantages-faq-button"]}>{t('faq')}</Link>
            </section>
            <section className={styles["guides-container"]}>
                <p className={`${styles["guides-heading"]} ${murecho.className}`}>{t('guidesResources')}</p>
                <p className={`${styles["guides-text"]} ${murecho.className}`}>{t('guidesResourcesDescription')}</p>
                <Link href={`/${lang}/user-guides`} className={styles["guides-button"]}>{t('userGuides')}</Link>
            </section>
            <section className={styles["aplopedia-container"]}>
                <p className={`${styles["aplopedia-heading"]} ${murecho.className}`}>{t('aplopedia')}</p>
                <p className={`${styles["aplopedia-text"]} ${murecho.className}`}>{t('aplopediaDescription')}</p>
                <Link href="#" target='_blank' className={styles["aplopedia-link"]}><p>{t('readAplopedia')}</p></Link>
            </section>
            <section className={styles["community-container"]}>
                <p className={`${styles["community-heading"]} ${murecho.className}`}>{t('joinCommunity')}</p>
                <div className={styles["community-info"]}>
                    <p className={`${styles["community-info-heading"]} ${murecho.className}`}>{t('contribute')}</p>
                    <p className={`${styles["community-info-text"]} ${murecho.className}`}>{t('contributeDescription')}</p>
                </div>
                <Link href="https://github.com/AploCoin/" target='_blank' className={styles["community-button1"]}>{t('contributing')}</Link>
                <div className={styles["community-info"]}>
                    <p className={`${styles["community-info-heading"]} ${murecho.className}`}>{t('researchLab')}</p>
                    <p className={`${styles["community-info-text"]} ${murecho.className}`}>{t('researchLabDescription')}</p>
                </div>
                <img src={"/main/community-image-2.png"} className={styles["community-image"]}/>
                <div className={styles["community-info"]}>
                    <p className={`${styles["community-info-heading"]} ${murecho.className}`}>{t('meetCommunity')}</p>
                    <p className={`${styles["community-info-text"]} ${murecho.className}`}>{t('meetCommunityDescription')}</p>
                </div>
                <Link href="https://t.me/aplocoin_community" target='_blank' className={styles["community-button2"]}>{t('hangouts')}</Link>
            </section>
            <section className={styles["advantages-container"]}>
                <Charts/>
                <Info/>
            </section>
        </>
    )
}