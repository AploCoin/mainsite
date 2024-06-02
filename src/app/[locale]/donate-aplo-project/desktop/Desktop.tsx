import {useTranslations} from "next-intl";
import styles from "./desktop.module.css";
import {Murecho} from 'next/font/google';
import Link from "next/link";

const murecho = Murecho({subsets: ['latin', 'cyrillic']});

export default function Desktop() {
    const t = useTranslations('Donate');

    return (
        <>
            <section className={styles['header-container']}>
                <p className={`${styles["header-heading"]} ${murecho.className}`}>{t('donateToAplo')}</p>
                <p className={`${styles["header-text"]} ${murecho.className}`}>
                    {t('donationDescription')} <Link href={""}><span className={styles["header-link"]}>{t('fundingRequired')}</span></Link>
                </p>
            </section>
            <section className={styles['main-container']}>
                <div className={styles["info-container"]}>
                    <p className={`${styles["info-heading"]} ${murecho.className}`}>{t('contributeQRCode')}</p>
                    <p className={`${styles["info-instruction"]} ${murecho.className}`}>{t('instruction1')}</p>
                    <p className={`${styles["info-instruction"]} ${murecho.className}`}>{t('instruction2')}</p>
                    <img src={"/donate-to-aplo/qr.png"} className={styles["qr-image"]}></img>
                    <p className={`${styles["info-instruction"]} ${murecho.className}`}>{t('or')}</p>
                    <p className={`${styles["info-instruction"]} ${murecho.className}`}>{t('enterAddress')}</p>
                    <p className={`${styles["token"]} ${murecho.className}`}>TM8DFB8Ea4sQNUfppfCr7WkSxURB5KNbuk</p>
                    <p className={`${styles["info-instruction"]} ${murecho.className}`}>{t('anotherAdress')}</p>
                    <p className={`${styles["token"]} ${murecho.className}`}>0x67adcF8c25c88aF0Df3caB522C9dD5b11d017aca</p>
                    <p className={`${styles["info-instruction"]} ${murecho.className}`}>{t('sendThankYou')}</p>
                    <p className={`${styles["remark"]} ${murecho.className}`}>{t('remark')}</p>
                </div>
            </section>
        </>
    )
}
