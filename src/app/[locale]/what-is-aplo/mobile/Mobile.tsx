import styles from "./mobile.module.css";
import {Murecho} from 'next/font/google';
import {useTranslations} from "next-intl";

const murecho = Murecho({subsets: ['latin', 'cyrillic']});

export default function Mobile() {
    const t = useTranslations('WhatIsAplo');

    return (
        <>
            <p className={`${styles["page-heading"]} ${murecho.className}`}>{t('whatIsAploTitle')}</p>
            <section className={styles["main-section"]}>
                <div className={styles["main-info"]}>
                    <p className={`${styles["info-heading"]} ${murecho.className}`}>{t('leadingCrypto')}</p>
                    <p className={`${styles["info-text"]} ${murecho.className}`}>{t('transparentBlockchain')}</p>
                </div>
                <img src={"/what-is-aplo/image-1.png"} className={styles["main-image"]}/>
                <div className={styles["main-info"]}>
                    <p className={`${styles["info-heading"]} ${murecho.className}`}>{t('confidentialUntraceable')}</p>
                    <p className={`${styles["info-text"]} ${murecho.className}`}>{t('untraceableDescription')}</p>
                </div>
                <img src={"/what-is-aplo/image-2.png"} className={styles["main-image"]}/>
                <div className={styles["main-info"]}>
                    <p className={`${styles["info-heading"]} ${murecho.className}`}>{t('electronicCash')}</p>
                    <p className={`${styles["info-text"]} ${murecho.className}`}>{t('noTransferFees')}</p>
                    <button className={styles["main-button"]}>{t('getAplo')}</button>
                </div>
                <div className={styles["main-info"]}>
                    <p className={`${styles["info-heading"]} ${murecho.className}`}>{t('community')}</p>
                    <p className={`${styles["info-text"]} ${murecho.className}`}>{t('communityDescription')}</p>
                    <button className={styles["main-button"]}>{t('joinWorkgroup')}</button>
                </div>
            </section>
        </>
    )
}