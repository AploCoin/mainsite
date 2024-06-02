"use client";
import { useState, useEffect } from "react";
import styles from "./desktop.module.css";
import Image from "next/image";
import { Murecho, Open_Sans } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const murecho = Murecho({
  subsets: ["latin", "cyrillic"],
  variable: "--font-murecho",
});

const open_sans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-open-sans",
});


const Footer = () => {
  const pathname = usePathname();
  const lang = pathname.substring(1, 3);
  const [isMobile, setIsMobile] = useState(false);
  const [styless, setStyles] = useState<any>({});

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const loadStyles = async () => {
      if (isMobile) {
        const module = await import("./mobile.module.css");
        setStyles(module);
      } else {
        const module = await import("./desktop.module.css");
        setStyles(module);
      }
    };
    loadStyles();
  }, [isMobile]);

  return (
    <footer className={`${styles.footer} ${murecho.variable} ${open_sans.variable}`}>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <Image
            src="/menu/logo.png"
            width={6}
            height={3}
            alt="AploCoin logo"
            className={styles.logo}
          />
          <div className={`${styles["logo-text-container"]}`}>
            <span className={`${styles["logo-text"]}`}>
              Private, decentralized
            </span>
            <span
              className={`${styles["logo-text"]} ${styles["padding-text"]}`}
            >
              cryptocurrency that keeps
            </span>
            <span
              className={`${styles["logo-text"]} ${styles["padding-text"]}`}
            >
              your finances confidential
            </span>
            <span className={`${styles["logo-text"]}`}>and secure.</span>
          </div>
        </div>
        <div className={styles["nav-container"]}>
          <h3>Resources</h3>
          <Link href={`/${lang}/what-is-aplo`}>What is aplo</Link>
          <Link href={`/${lang}/mining-aplo`}>Mining</Link>
          <Link href={`/${lang}/about-aplo`}>About</Link>
          <Link href={`/${lang}/roadmap`}>Roadmap</Link>
        </div>
        <div className={styles["nav-container"]}>
          <h3>Reach Out</h3>
          <Link href={`/${lang}/`}>Contact</Link>
        </div>
        <div className={styles["nav-container"]}>
          <h3>Community</h3>
          <Link href={`/${lang}/`}>Exchanges</Link>
        </div>
      </div>
      <div style={{marginTop: "8.78vw"}} className="flex flex-row">
        <Link href="https://github.com/AploCoin/mainsite" target="_blank" className={styles['source-code-link']}>
          Source Code
          <Image src="/menu/url.svg" width={9} height={8} alt="Url icon for navigation"/>
        </Link>
        
      </div>
    </footer>
  );
};

export default Footer;
