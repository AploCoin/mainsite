import {useTranslations} from "next-intl";
import styles from "./desktop.module.css";
import {Murecho} from 'next/font/google';

const murecho = Murecho({subsets: ['latin', 'cyrillic']});

export default function Desktop() {
    const t = useTranslations('WhatIsAplo');

    return (
        <>
            <p className={`${styles["page-heading"]} ${murecho.className}`}>{t('whatIsAploTitle')}</p>
            <section className={styles['main-container']}>
                <div className={`${styles["main-info"]} ${styles["left-info"]}`}>
                    <p className={`${styles["info-heading"]} ${murecho.className}`}>{t('leadingCrypto')}</p>
                    <p className={`${styles["info-text"]} ${murecho.className}`}>{t('transparentBlockchain')}</p>
                </div>
                <img src="/what-is-aplo/image-1.png" className={`${styles["main-image"]} ${styles["right-image"]}`}></img>
                <img src="/what-is-aplo/image-2.png" className={`${styles["main-image"]} ${styles["left-image"]}`}></img>
                <div className={`${styles["main-info"]} ${styles["right-info"]}`}>
                    <p className={`${styles["info-heading"]} ${murecho.className}`}>{t('confidentialUntraceable')}</p>
                    <p className={`${styles["info-text"]} ${murecho.className}`}>{t('untraceableDescription')}</p>
                </div>
                <div className={`${styles["main-info"]} ${styles["left-info"]}`}>
                    <p className={`${styles["info-heading"]} ${murecho.className}`}>{t('electronicCash')}</p>
                    <p className={`${styles["info-text"]} ${murecho.className}`}>{t('noTransferFees')}</p>
                    <button className={styles["info-button"]}>{t('getAplo')}</button>
                </div>
                <img src="/what-is-aplo/image-3.png" className={`${styles["main-image"]} ${styles["right-image"]}`}></img>
                <img src="/what-is-aplo/image-4.png" className={`${styles["main-image"]} ${styles["left-image"]}`}></img>
                <div className={`${styles["main-info"]} ${styles["right-info"]}`}>
                    <p className={`${styles["info-heading"]} ${murecho.className}`}>{t('community')}</p>
                    <p className={`${styles["info-text"]} ${murecho.className}`}>{t('communityDescription')}</p>
                    <button className={`${styles["info-button"]} ${styles["button2"]}`}>{t('joinWorkgroup')}</button>
                </div>
            </section>
        </>
    )
}
