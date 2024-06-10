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
            <Link href={""}>
              <span className={styles["section-text-link"]}>
                {` ${t("randomXLinkText")}`}
              </span>
            </Link>
            . {t("asicResistantText")}
          </p>
          <p className={`${styles["section-text"]} ${murecho.className}`}>
            {t("cpuGpuText")}
          </p>
          <p className={`${styles["section-heading"]} ${murecho.className}`}>
            {t("soloOrPoolHeading")}
          </p>
          <p className={`${styles["section-text"]} ${murecho.className}`}>
            {t("soloOrPoolText")}
            <Link href={""}>
              <span className={styles["section-text-link"]}>
                {t("guiLinkText")}
              </span>
            </Link>{" "}
            {` ${t("and")} `}
            <Link href={""}>
              <span className={styles["section-text-link"]}>
                {t("cliLinkText")}
              </span>
            </Link>
            {t("soloMiningBenefits")}
          </p>
          <p className={`${styles["section-text"]} ${murecho.className}`}>
            {t("prosConsText")}
          </p>
          <div className={styles["advantages"]}>
            <div className={styles["advantages-column"]}>
              <p
                className={`${styles["advantages-heading"]} ${murecho.className}`}
              >
                {t("soloHeading")}
              </p>
              <p className={`${styles["advantage"]} ${murecho.className}`}>
                <span className={styles["advantage-span"]}>
                  <img
                    className={styles["advantage-icon"]}
                    src={"/mining-aplo/check.png"}
                  />
                  {t("soloAdvantage1")}
                </span>
              </p>
              <p className={`${styles["advantage"]} ${murecho.className}`}>
                <span className={styles["advantage-span"]}>
                  <img
                    className={styles["advantage-icon"]}
                    src={"/mining-aplo/check.png"}
                  />
                  {t("soloAdvantage2")}
                </span>
              </p>
              <p className={`${styles["disadvantage"]} ${murecho.className}`}>
                <span className={styles["advantage-span"]}>
                  <img
                    className={styles["advantage-icon"]}
                    src={"/mining-aplo/cross.png"}
                  />
                  {t("soloDisadvantage1")}
                </span>
              </p>
            </div>
            <div className={styles["advantages-column"]}>
              <p
                className={`${styles["advantages-heading"]} ${murecho.className}`}
              >
                {t("poolHeading")}
              </p>
              <p className={`${styles["advantage"]} ${murecho.className}`}>
                <span className={styles["advantage-span"]}>
                  <img
                    className={styles["advantage-icon"]}
                    src={"/mining-aplo/check.png"}
                  />
                  {t("poolAdvantage1")}
                </span>
              </p>
              <p className={`${styles["disadvantage"]} ${murecho.className}`}>
                <span className={styles["advantage-span"]}>
                  <img
                    className={styles["advantage-icon"]}
                    src={"/mining-aplo/cross.png"}
                  />
                  {t("poolDisadvantage1")}
                </span>
              </p>
              <p className={`${styles["disadvantage"]} ${murecho.className}`}>
                <span className={styles["advantage-span"]}>
                  <img
                    className={styles["advantage-icon"]}
                    src={"/mining-aplo/cross.png"}
                  />
                  {t("poolDisadvantage2")}
                </span>
              </p>
              <p className={`${styles["disadvantage"]} ${murecho.className}`}>
                <span className={styles["advantage-span"]}>
                  <img
                    className={styles["advantage-icon"]}
                    src={"/mining-aplo/cross.png"}
                  />
                  {t("poolDisadvantage3")}
                </span>
              </p>
            </div>
          </div>
          <p className={`${styles["section-text"]} ${murecho.className}`}>
            {t("helpChoosingPool")}
          </p>
          <p className={`${styles["section-link"]} ${murecho.className}`}>
            <Link href={""}>
              <span className={styles["section-link-span"]}>
                miningpoolstats.stream
                <img
                  className={styles["section-link-icon"]}
                  src={"/mining-aplo/main-icon.png"}
                />
              </span>
            </Link>
          </p>
          <p className={`${styles["section-link"]} ${murecho.className}`}>
            <Link href={""}>
              <span className={styles["section-link-span"]}>
                pools.xmr.wiki
                <img
                  className={styles["section-link-icon"]}
                  src={"/mining-aplo/main-icon.png"}
                />
              </span>
            </Link>
          </p>
        </div>
      </section>
      <section className={styles["advantages-section"]}>
        <div className={`${styles["advantages-container"]}`}>
          <p className={`${styles["section-heading"]} ${murecho.className}`}>
            {t("p2poolHeading")}
          </p>
          <p className={`${styles["section-text"]} ${murecho.className}`}>
            {t("p2poolText1")} {" "}
            <Link href={""}>
              <span className={styles["section-text-link"]}>
                {t("announcementPostLinkText")}
              </span>
            </Link>
            .
          </p>
          <p className={`${styles["section-text"]} ${murecho.className}`}>
            {t("p2poolText2")}
          </p>
          <p
            className={`${styles["section-paragraph-heading"]} ${murecho.className}`}
          >
            {t("mainFeaturesHeading")}
          </p>
          <div className={styles["advantages-paragraph"]}>
            <p className={`${styles["section-text"]} ${murecho.className}`}>
              <span className={styles["paragraph"]}>{t("decentralized")}</span>
            </p>
            <p className={`${styles["section-text"]} ${murecho.className}`}>
              <span className={styles["paragraph"]}>{t("permissionless")}</span>
            </p>
            <p className={`${styles["section-text"]} ${murecho.className}`}>
              <span className={styles["paragraph"]}>{t("trustless")}</span>
            </p>
            <p className={`${styles["section-text"]} ${murecho.className}`}>
              <span className={styles["paragraph"]}>{t("pplnsScheme")}</span>
            </p>
            <p className={`${styles["section-text"]} ${murecho.className}`}>
              <span className={styles["paragraph"]}>{t("zeroFee")}</span>
            </p>
            <p className={`${styles["section-text"]} ${murecho.className}`}>
              <span className={styles["paragraph"]}>{t("zeroPayoutFee")}</span>
            </p>
            <p className={`${styles["section-text"]} ${murecho.className}`}>
              {t("minimumPayout")}
            </p>
          </div>
          <p className={`${styles["section-text"]} ${murecho.className}`}>
            {t("githubRepoText")}
          </p>
          <p className={`${styles["section-link"]} ${murecho.className}`}>
            <Link href={""}>
              <span className={styles["section-link-span"]}>
                github.com/SChernykh/p2pool
                <img
                  className={styles["section-link-icon"]}
                  src={"/mining-aplo/main-icon.png"}
                />
              </span>
            </Link>
          </p>
        </div>
      </section>
      <section className={styles["advantages-section"]}>
        <div className={`${styles["advantages-container"]}`}>
          <p className={`${styles["section-heading"]} ${murecho.className}`}>
            {t("hardwareHeading")}
          </p>
          <p className={`${styles["section-text"]} ${murecho.className}`}>
            {t("hardwareText")} {" "}
            <Link href={""}>
              <span className={styles["section-text-link"]}>
                {t("benchmarksLinkText")}
              </span>
            </Link>
            .
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
                  <img
                    className={styles["section-link-icon"]}
                    src={"/mining-aplo/main-icon.png"}
                  />
                </span>
              </Link>
            </p>
            <p className={`${styles["section-link"]} ${murecho.className}`}>
              <Link href={""}>
                <span className={styles["section-link-span"]}>
                  {t("csminerLinkText")}
                  <img
                    className={styles["section-link-icon"]}
                    src={"/mining-aplo/main-icon.png"}
                  />
                </span>
              </Link>
            </p>
          </div>
          <p className={`${styles["section-text"]} ${murecho.className}`}>
            {t("noteText")}
          </p>
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
          <p
            className={`${styles["section-text"]} ${murecho.className} flex`}
            style={{ marginTop: "-25px" }}
          >
            {t("supportText2")}{" "}
            <Link href={""}>
              <span
                className={`${styles["section-link-span"]} ${styles["text-marging"]}`}
              >
                {t("matrix")}
                <img
                  className={styles["section-link-icon"]}
                  src={"/mining-aplo/main-icon.png"}
                />
              </span>
            </Link>
            {` ${t("and")} `}
            <Link href={""}>
              <span
                className={`${styles["section-link-span"]} ${styles["text-marging"]}`}
              >
                {t("libera")}
                <img
                  className={styles["section-link-icon"]}
                  src={"/mining-aplo/main-icon.png"}
                />
              </span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
