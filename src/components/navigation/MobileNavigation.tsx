import { useState, useRef, useEffect } from "react";
import styles from "./mobile.module.css";
import LanguageSwitcher from "../language/LanguageSwitcher";
import Image from "next/image";
import { Murecho } from "next/font/google";
import { useTranslations } from "next-intl";

const murecho = Murecho({ subsets: ["latin", "cyrillic"] });

export default function MobileNavigation() {
  const t = useTranslations("Menu");
  const [showMe, setShowMe] = useState(false);
  const [mainComponentHeight, setMainComponentHeight] = useState(0);
  const mainComponentRef = useRef(null);

  function toggle() {
    setShowMe(!showMe);
  }

  useEffect(() => {
    if (mainComponentRef.current) {
      let component = mainComponentRef.current as any
      setMainComponentHeight(component.offsetHeight);
    }
  }, []);

  return (
    <>
      <div
        ref={mainComponentRef}
        className={`flex flex-column bg-white justify-between items-center ${styles.mainComponent}`}
      >
        <Image
          src="/menu/logo.png"
          width={6}
          height={3}
          alt="AploCoin logo"
          className={styles.logo}
        />
        <div className="flex flex-column">
          <LanguageSwitcher />
          <button onClick={toggle}>
            <Image
              src="/menu/menu-m.svg"
              width={24}
              height={16}
              alt="Icon open menu"
              className={`${styles.icon} ${showMe ? styles.open : ""}`}
            />
          </button>
        </div>
      </div>
      <div
        style={{
          height: `${mainComponentHeight * 2}px`,
          marginBottom: "1.35vh",
        }}
      ></div>
      <div
        style={{
          display: showMe ? "flex" : "none",
        }}
        className={styles.menuPopup}
      >
        <a className={`${styles["url-button"]} ${murecho.className}`}>
          {t("whatIsAplo")}
        </a>
        <div className={styles.border} />
        <a className={`${styles["url-button"]} ${murecho.className}`}>
          {t("mining")}
        </a>
        <div className={styles.border} />
        <a className={`${styles["url-button"]} ${murecho.className}`}>
          {t("faq")}
        </a>
        <div className={styles.border} />
        <a className={`${styles["url-button"]} ${murecho.className}`}>
          {t("about")}
        </a>
        <div className={styles.border} />
        <a className={`${styles["url-button"]} ${murecho.className}`}>
          {t("roadmap")}
        </a>
        <div className={styles.border} />
        <a
          className={`${styles["url-button"]} ${murecho.className}`}
        >
          {t("userGuides")}
        </a>
        <div className={styles.border} />
      </div>
    </>
  );
}
