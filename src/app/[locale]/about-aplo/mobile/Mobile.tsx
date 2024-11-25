import {useTranslations} from "next-intl";
import styles from "./mobile.module.css";
import {Murecho} from 'next/font/google';
import Link from "next/link";

const murecho = Murecho({subsets: ['latin', 'cyrillic']});

export default function Mobile() {
    const t = useTranslations('AboutAplo');

    return (
        <>
            <p className={`${styles["page-heading"]} ${murecho.className}`}>{t('pageHeading')}</p>
            <section className={styles["section-container"]}>
                <p className={`${styles["about-heading"]} ${murecho.className}`}>{t('historyHeading')}</p>
                <p className={`${styles["about-text"]} ${murecho.className}`}>{t('historyText1')}</p>
            </section>
            <section className={styles["section-container"]}>
                <p className={`${styles["about-heading"]} ${murecho.className}`}>{t('valuesHeading')}</p>
                <p className={`${styles["about-text"]} ${murecho.className}`}>{t('valuesIntro')}</p>
                <p className={`${styles["about-paragraph-heading"]} ${murecho.className}`}>{t('simplicityHeading')}</p>
                <p className={`${styles["about-text"]} ${murecho.className}`}>{t('simplicityText')}</p>
                <p className={`${styles["about-paragraph-heading"]} ${murecho.className}`}>{t('securityHeading')}</p>
                <p className={`${styles["about-text"]} ${murecho.className}`}>{t('securityText')}</p>
                <p className={`${styles["about-paragraph-heading"]} ${murecho.className}`}>{t('privacyHeading')}</p>
                <p className={`${styles["about-text"]} ${murecho.className}`}>{t('privacyText')}</p>
                <p className={`${styles["about-paragraph-heading"]} ${murecho.className}`}>{t('decentralizationHeading')}</p>
                <p className={`${styles["about-text"]} ${murecho.className}`}>{t('decentralizationText')}</p>
            </section>
            <section className={styles["section-container"]}>
                <p className={`${styles["about-heading"]} ${murecho.className}`}>{t('technicalInfoHeading')}</p>
                <p className={`${styles["about-text"]} ${murecho.className}`}>{t('technicalInfoText')} <Link href={""}><span className={styles["about-link"]}>{t('library')}</span></Link></p>
                <p className={`${styles["about-paragraph-heading"]} ${murecho.className}`}>{t('powHeading')}</p>
                <p className={`${styles["about-text"]} ${murecho.className}`}>{t('powText')}</p>
                <p className={`${styles["about-text"]} ${murecho.className}`}>{t('powText1')}<br />{t('powText2')}</p>

                <p className={`${styles["about-paragraph-heading"]} ${murecho.className}`}>{t('emissionCurveHeading')}</p>
                <p className={`${styles["about-text"]} ${murecho.className}`}>{t('emissionCurveText')} <Link href={""}><span className={styles["about-link"]}>{t('tailEmission')}</span></Link></p>
                <p className={`${styles["about-paragraph-heading"]} ${murecho.className}`}>{t('blocksHeading')}</p>
                <p className={`${styles["about-text"]} ${murecho.className}`}>{t('blocksText')} <Link href={""}><span className={styles["about-link"]}>{t('block')}</span></Link> <Link href={""}><span className={styles["about-link"]}>{t('scalability')}</span></Link></p>
                <p className={`${styles["about-paragraph-heading"]} ${murecho.className}`}>{t('privacyTechnologiesHeading')}</p>
                <p className={`${styles["about-techno-list"]} ${murecho.className}`}>{t('privacyTechnologiesList')}</p>
            </section>
        </>
    )
}
