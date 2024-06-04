import {useTranslations} from "next-intl";
import styles from "./mobile.module.css";
import {Murecho} from 'next/font/google';
import Link from "next/link";

const murecho = Murecho({subsets: ['latin', 'cyrillic']});

export default function Mobile() {
    const t = useTranslations("Roadmap");
    return (
        <>
            <p className={`${styles["page-heading"]} ${murecho.className}`}>{t('title')}</p>
            <div className={styles["roadmap-remarks"]}>
                <p className={`${styles["roadmap-remark"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/completed.png"}/>{t('completed')}</span></p>
                <p className={`${styles["roadmap-remark"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/ongoing.png"}/>{t('onGoing')}</span></p>
                <p className={`${styles["roadmap-remark"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/upcoming.png"}/>{t('upComing')}</span></p>
            </div>
            <section className={styles["roadmap-section"]}>
                <p className={`${styles["roadmap-year"]} ${murecho.className}`}>2022</p>
                <p className={`${styles["roadmap-month"]} ${murecho.className}`}>April</p>
                <p className={`${styles["roadmap-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/completed.png"}/>Completed task</span></p>
                <p className={`${styles["roadmap-task"]} ${styles["link-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/upcoming.png"}/><Link className={styles["remark-link"]} href={""}>Upcoming Task Link</Link> <img className={styles["remark-link-icon"]} src={"/roadmap/link-icon.png"}/></span></p>
                <p className={`${styles["roadmap-year"]} ${murecho.className}`}>2023</p>
                <p className={`${styles["roadmap-month"]} ${murecho.className}`}>March</p>
                <p className={`${styles["roadmap-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/completed.png"}/>Completed task</span></p>
                <p className={`${styles["roadmap-task"]} ${styles["link-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/upcoming.png"}/><Link className={styles["remark-link"]} href={""}>Upcoming Task Link</Link> <img className={styles["remark-link-icon"]} src={"/roadmap/link-icon.png"}/></span></p>
            </section>
        </>
    );
}