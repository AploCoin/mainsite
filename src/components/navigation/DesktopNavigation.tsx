import styles from "./desktop.module.css";
import { Murecho } from "next/font/google";
import { Open_Sans } from "next/font/google";
import LanguageSwitcher from "../language/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const murecho = Murecho({ subsets: ["latin", "cyrillic"] });
const open_sans = Open_Sans({ subsets: ["latin", "cyrillic"] });

export default function DesktopNavigation() {
  const t = useTranslations("Menu");
  const pathname = usePathname();
  const lang = pathname.substring(1, 3);

  return (
    <div
      style={{
        paddingLeft: "clamp(4vw, 9vw, 10.55vw)",
        paddingRight: "clamp(4vw, 9vw, 10.55vw)",
        width: "100vw",
      }}
    >
      <div
        className={styles["menu-container"] + " flex flex-row justify-between"}
      >
        <div className="flex flex-row items-center">
          <Image
            src="/menu/logo.png"
            width={6}
            height={3}
            alt="AploCoin logo"
            className={styles.logo}
          />
          <div className={`flex flex-row ${styles[`${lang}-lang`]}`}>
            <Link
              href={`/${lang}/what-is-aplo`}
              className={`${styles["url-button"]} ${murecho.className}`}
            >
              {t("whatIsAplo")}
            </Link>
            <Link
              href={`/${lang}/mining-aplo`}
              className={`${styles["url-button"]} ${murecho.className}`}
            >
              {t("mining")}
            </Link>
            <Link
              href={`/${lang}/faq`}
              className={`${styles["url-button"]} ${murecho.className}`}
            >
              {t("faq")}
            </Link>
            <Link
              href={`/${lang}/about-aplo`}
              className={`${styles["url-button"]} ${murecho.className}`}
            >
              {t("about")}
            </Link>
            <Link
              href={`/${lang}/roadmap`}
              className={`${styles["url-button"]} ${murecho.className}`}
            >
              {t("roadmap")}
            </Link>
            <Link
              href={`/${lang}/user-guides`}
              className={`${styles["url-button"]} ${murecho.className}`}
              style={{ marginRight: "0px" }}
            >
              {t("userGuides")}
            </Link>
          </div>
        </div>
        <div className="flex flex-row">
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <Link href={`/${lang}/donate-aplo-project`} className={`${styles["donate-button"]}`}>
              <span
                className={`${styles["donate-text"]} ${open_sans.className}`}
              >
                {t("donate")}
              </span>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}
