import { useState, useRef, useEffect } from "react";
import styles from "./mobile.module.css";
import LanguageSwitcher from "../language/LanguageSwitcher";
import Image from "next/image";
import { Murecho } from "next/font/google";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

const murecho = Murecho({ subsets: ["latin", "cyrillic"] });

export default function MobileNavigation() {
  const t = useTranslations("Menu");
  const [showMe, setShowMe] = useState(false);
  const [mainComponentHeight, setMainComponentHeight] = useState(0);
  const mainComponentRef = useRef(null);

  const pathname = usePathname();
  const lang = pathname.substring(1, 3);

  function toggle() {
    setShowMe(!showMe);
  }
  function close() {
    setTimeout(() => {
      setShowMe(false);
    }, 300);
  }

  useEffect(() => {
    if (mainComponentRef.current) {
      let component = mainComponentRef.current as any;
      setMainComponentHeight(component.offsetHeight);
    }
  }, []);

  return (
    <>
      <div
        ref={mainComponentRef}
        className={`flex flex-column bg-white justify-between items-center ${styles.mainComponent}`}
      >
        <Link href={`/${lang}`} onClick={close}>
          <Image
            src="/menu/logo.png"
            width={6}
            height={3}
            alt="AploCoin logo"
            className={styles.logo}
          />
        </Link>
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
          height: `${mainComponentHeight}px`,
          marginBottom: "1.35vh",
        }}
      ></div>
      <div
        style={{
          display: showMe ? "flex" : "none",
        }}
        className={styles.menuPopup}
      >
        <Link
          href={`/${lang}/what-is-aplo`}
          className={`${styles["url-button"]} ${murecho.className}`}
          onClick={close}
        >
          {t("whatIsAplo")}
        </Link>
        <div className={styles.border} />
        <Link
          href={`/${lang}/mining-aplo`}
          className={`${styles["url-button"]} ${murecho.className}`}
          onClick={close}
        >
          {t("mining")}
        </Link>
        <div className={styles.border} />
        <Link
          href={`/${lang}/faq`}
          className={`${styles["url-button"]} ${murecho.className}`}
          onClick={close}
        >
          {t("faq")}
        </Link>
        <div className={styles.border} />
        <Link
          href={`/${lang}/about-aplo`}
          className={`${styles["url-button"]} ${murecho.className}`}
          onClick={close}
        >
          {t("about")}
        </Link>
        <div className={styles.border} />
        <Link
          href={`/${lang}/roadmap`}
          className={`${styles["url-button"]} ${murecho.className}`}
          onClick={close}
        >
          {t("roadmap")}
        </Link>
        <div className={styles.border} />
        <Link
          href={`/${lang}/user-guides`}
          className={`${styles["url-button"]} ${murecho.className}`}
          onClick={close}
          style={{ marginRight: "0px" }}
        >
          {t("userGuides")}
        </Link>
      </div>
    </>
  );
}
