"use client";

import { useTranslations } from "next-intl";
import styles from "./desktop.module.css";
import { Murecho } from 'next/font/google';
import Link from "next/link";

const murecho = Murecho({ subsets: ['latin', 'cyrillic'] });

export default function Desktop() {
    const t = useTranslations("Faq");

    return (
        <>
            <p className={`${styles["page-heading"]} ${murecho.className}`}>{t('pageHeading')}</p>
            <p className={`${styles["page-description"]} ${murecho.className}`}>{t('pageDescription')}</p>
            <section className={styles["double-section"]}>
                <div className={styles["double-section-left"]}>
                    <div className={styles["left-container"]}>
                        <p className={`${styles["section-heading"]} ${murecho.className}`}>{t('tableOfContentsHeading')}</p>
                        <p className={`${styles["links-heading"]} ${murecho.className}`}>{t('basicsHeading')}</p>
                        <div className={styles["links-paragraph"]}>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('basicsLink1')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('basicsLink2')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('basicsLink3')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('basicsLink4')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('basicsLink5')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('basicsLink6')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('basicsLink7')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('basicsLink8')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('basicsLink9')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        </div>
                        <p className={`${styles["links-heading"]} ${murecho.className}`}>{t('privacyHeading')}</p>
                        <div className={styles["links-paragraph"]}>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('privacyLink1')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('privacyLink2')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('privacyLink3')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        </div>
                        <p className={`${styles["links-heading"]} ${murecho.className}`}>{t('securityHeading')}</p>
                        <div className={styles["links-paragraph"]}>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('securityLink1')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('securityLink2')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('securityLink3')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        </div>
                        <p className={`${styles["links-heading"]} ${murecho.className}`}>{t('economicsHeading')}</p>
                        <div className={styles["links-paragraph"]}>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('economicsLink1')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('economicsLink2')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('economicsLink3')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('economicsLink4')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('economicsLink5')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        </div>
                        <p className={`${styles["links-heading"]} ${murecho.className}`}>{t('walletsHeading')}</p>
                        <div className={styles["links-paragraph"]}>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('walletsLink1')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('walletsLink2')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('walletsLink3')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('walletsLink4')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('walletsLink5')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('walletsLink6')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        </div>
                        <p className={`${styles["links-heading"]} ${murecho.className}`}>{t('nodeHeading')}</p>
                        <div className={styles["links-paragraph"]}>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('nodeLink1')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('nodeLink2')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('nodeLink3')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('nodeLink4')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('nodeLink5')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('nodeLink6')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('nodeLink7')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>{t('nodeLink8')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        </div>
                    </div>
                </div>
                <div className={styles["double-section-right"]}>
                    <div className={styles["right-container"]}>
                        <p className={`${styles["section-heading"]} ${murecho.className}`}>{t('resourcesAndHelpHeading')}</p>
                        <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={`${styles["page-link-span"]} ${styles["right-link-heading"]}`}>{t('resourcesLink1')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        <p className={`${styles["page-text"]} ${murecho.className}`}>{t('resourcesText1')}</p>
                        <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={`${styles["page-link-span"]} ${styles["right-link-heading"]}`}>{t('resourcesLink2')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        <p className={`${styles["page-text"]} ${murecho.className}`}>{t('resourcesText2')}</p>
                        <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={`${styles["page-link-span"]} ${styles["right-link-heading"]}`}>{t('resourcesLink3')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        <p className={`${styles["page-text"]} ${murecho.className}`}>{t('resourcesText3')}</p>
                        <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={`${styles["page-link-span"]} ${styles["right-link-heading"]}`}>{t('resourcesLink4')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        <p className={`${styles["page-text"]} ${murecho.className}`}>{t('resourcesText4')}</p>
                        <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={`${styles["page-link-span"]} ${styles["right-link-heading"]}`}>{t('resourcesLink5')}<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        <p className={`${styles["page-text"]} ${murecho.className}`}>{t('resourcesText5')}</p>
                    </div>
                </div>
            </section>
            <section className={styles["main-section"]}>
                <div className={styles["main-container"]}>
                    <p className={`${styles["section-heading"]} ${murecho.className}`}>{t('basicsHeading')}</p>
                    <p className={`${styles["paragraph-heading"]} ${murecho.className}`}>{t('basicsQuestion1Heading')}</p>
                    <p className={`${styles["paragraph-text"]} ${murecho.className}`}>{t('basicsQuestion1Text')}</p>
                    <p className={`${styles["more-link"]} ${murecho.className}`}>
                        <span>More Info: </span>
                        <Link href="">
                            <span className={`${styles["page-link-span"]}`}>
                                {t('basicsQuestion1MoreInfo')}
                                <img className={styles["page-link-image"]} src="/user-guides/main-icon.png"/>
                            </span>
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
}
