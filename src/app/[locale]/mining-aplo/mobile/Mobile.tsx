"use client";

import { useTranslations } from "next-intl";
import styles from "./mobile.module.css";
import { Murecho } from 'next/font/google';
import Link from "next/link";

const murecho = Murecho({ subsets: ['latin', 'cyrillic'] });

export default function Mobile() {
  const t = useTranslations("MiningAplo");

  return (
    <>
      <p className={`${styles["page-heading"]} ${murecho.className}`}>
        {t("pageHeading")}
      </p>
      <p className={`${styles["page-description"]} ${murecho.className}`}>
        {t("pageDescription")}
      </p>
      <section className={styles["advantages-section"]}>
        <div className={`${styles["advantages-container"]}`}>
          <p className={`${styles["section-heading"]} ${murecho.className}`}>
            {t("proofOfWorkHeading")}
          </p>
          <p className={`${styles["section-text"]} ${murecho.className}`}>
            {t("proofOfWorkText")}
          </p>
          
          <p className={`${styles["section-heading"]} ${murecho.className}`}>
            {t("miningModesHeading")}
          </p>
          <p className={`${styles["section-text"]} ${murecho.className}`}>
            {t("miningModesText")}
          </p>

          <p className={`${styles["section-heading"]} ${murecho.className}`}>
            {t("differencesHeading")}
          </p>
          
          <div className={styles["advantages"]}>
            <div className={styles["advantages-column"]}>
              <p className={`${styles["advantages-heading"]} ${murecho.className}`}>
                {t("aploHeading")}
              </p>
              <p className={`${styles["advantage"]} ${murecho.className}`}>
                <span className={styles["advantage-span"]}>
                  <img className={styles["advantage-icon"]} src={"/mining-aplo/check.png"} />
                  {t("aploAdvantage1")}
                </span>
              </p>
              <p className={`${styles["advantage"]} ${murecho.className}`}>
                <span className={styles["advantage-span"]}>
                  <img className={styles["advantage-icon"]} src={"/mining-aplo/check.png"} />
                  {t("aploAdvantage2")}
                </span>
              </p>
              <p className={`${styles["advantage"]} ${murecho.className}`}>
                <span className={styles["advantage-span"]}>
                  <img className={styles["advantage-icon"]} src={"/mining-aplo/check.png"} />
                  {t("aploAdvantage3")}
                </span>
              </p>
              <p className={`${styles["disadvantage"]} ${murecho.className}`}>
                <span className={styles["advantage-span"]}>
                  <img className={styles["advantage-icon"]} src={"/mining-aplo/cross.png"} />
                  {t("aploDisadvantage1")}
                </span>
              </p>
            </div>
            <div className={styles["advantages-column"]}>
              <p className={`${styles["advantages-heading"]} ${murecho.className}`}>
                {t("gaploHeading")}
              </p>
              <p className={`${styles["advantage"]} ${murecho.className}`}>
                <span className={styles["advantage-span"]}>
                  <img className={styles["advantage-icon"]} src={"/mining-aplo/check.png"} />
                  {t("gaploAdvantage1")}
                </span>
              </p>
              <p className={`${styles["advantage"]} ${murecho.className}`}>
                <span className={styles["advantage-span"]}>
                  <img className={styles["advantage-icon"]} src={"/mining-aplo/check.png"} />
                  {t("gaploAdvantage2")}
                </span>
              </p>
              <p className={`${styles["disadvantage"]} ${murecho.className}`}>
                <span className={styles["advantage-span"]}>
                  <img className={styles["advantage-icon"]} src={"/mining-aplo/cross.png"} />
                  {t("gaploDisadvantage1")}
                </span>
              </p>
              <p className={`${styles["disadvantage"]} ${murecho.className}`}>
                <span className={styles["advantage-span"]}>
                  <img className={styles["advantage-icon"]} src={"/mining-aplo/cross.png"} />
                  {t("gaploDisadvantage2")}
                </span>
              </p>
              <p className={`${styles["disadvantage"]} ${murecho.className}`}>
                <span className={styles["advantage-span"]}>
                  <img className={styles["advantage-icon"]} src={"/mining-aplo/cross.png"} />
                  {t("gaploDisadvantage3")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles["advantages-section"]}>
        <div className={`${styles["advantages-container"]}`}>
          <p className={`${styles["section-heading"]} ${murecho.className}`}>
            {t("hardwareHeading")}
          </p>
          <p className={`${styles["section-text"]} ${murecho.className}`}>
            {t("hardwareText")}
          </p>
          <p className={`${styles["section-heading"]} ${murecho.className}`}>
            {t("softwareHeading")}
          </p>
          <p className={`${styles["section-text"]} ${murecho.className}`}>
            {t("softwareText")}
          </p>
          <div className={styles["advantages-paragraph"]}>
            <p className={`${styles["section-link"]} ${murecho.className}`}>
              <Link href={""}>
                <span className={styles["section-link-span"]}>
                  {t("xmrigLinkText")}
                  <img className={styles["section-link-icon"]} src={"/mining-aplo/main-icon.png"} />
                </span>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className={styles["advantages-section"]}>
        <div className={`${styles["advantages-container"]}`}>
          <p className={`${styles["section-heading"]} ${murecho.className}`}>
            {t("supportHeading")}
          </p>
          <p className={`${styles["section-text"]} ${murecho.className}`}>
            {t("supportText")}
          </p>
          <p className={`${styles["section-text"]} ${murecho.className} flex`} style={{ marginTop: "-25px" }}>
            {t("supportText2")}{" "}
            <Link href={""}>
              <span className={`${styles["section-link-span"]} ${styles["text-marging"]}`}>
                {t("matrix")}
                <img className={styles["section-link-icon"]} src={"/mining-aplo/main-icon.png"} />
              </span>
            </Link>
            {` ${t("and")} `}
            <Link href={""}>
              <span className={`${styles["section-link-span"]} ${styles["text-marging"]}`}>
                {t("libera")}
                <img className={styles["section-link-icon"]} src={"/mining-aplo/main-icon.png"} />
              </span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
