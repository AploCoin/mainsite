"use client";

import {useTranslations} from "next-intl";
import styles from "./desktop.module.css";
import {Murecho} from 'next/font/google';
import Link from "next/link";
import {useRef, useState} from "react";


const murecho = Murecho({subsets: ['latin', 'cyrillic']});

export default function Desktop() {
    const t = useTranslations("Roadmap");
    const liRefs = useRef([]);
    const [activatedYear, setActivatedYear] = useState(null);
    const [activatedIndex, setActivatedIndex] = useState(null);

    const handleClick = (index) => {
        const clickedElement = liRefs.current[index];
        const yearText = clickedElement.querySelector('p').textContent;
        setActivatedYear(yearText);
        setActivatedIndex(index);
        console.log(yearText)
    };

    return (
        <>
            <p className={`${styles["page-heading"]} ${murecho.className}`}>{t('title')}</p>
            <div className={styles["roadmap-remarks"]}>
                <p className={`${styles["roadmap-remark"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src="/roadmap/completed.png"/>{t('completed')}</span></p>
                <p className={`${styles["roadmap-remark"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src="/roadmap/ongoing.png"/>{t('onGoing')}</span></p>
                <p className={`${styles["roadmap-remark"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src="/roadmap/upcoming.png"/>{t('upComing')}</span></p>
            </div>
            <section className={styles["menu-container"]}>
                <ul className={styles["roadmap-buttons"]}>
                    {['2019', '2020', '2021', '2022', '2023', 'Future'].map((year, index) => (
                        <li
                            key={index}
                            ref={(el) => (liRefs.current[index] = el)}
                            onClick={() => handleClick(index)}
                            className={`${styles["roadmap-category"]} ${
                                activatedIndex === index ? styles["activated"] : ''
                            }`}>
                            <p className={`${styles["category-year"]} ${murecho.className}`}>{year === 'Future' ? t('future') : year}</p>
                        </li>
                    ))}
                </ul>
            </section>
            {activatedYear &&
                <section className={styles["main-container"]}>
                    <p className={`${styles["year-heading"]} ${murecho.className}`}>{activatedYear}</p>
                    {activatedYear === "2019" &&
                        <div className={styles["task-container"]}>
                            <p className={`${styles["roadmap-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/completed.png"}/> Completed Task</span></p>
                            <p className={`${styles["roadmap-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/ongoing.png"}/> Ongoing Task</span></p>
                            <p className={`${styles["roadmap-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/upcoming.png"}/> Upcoming Task</span></p>
                        </div>
                    }{activatedYear === "2020" &&
                        <div className={styles["task-container"]}>
                            <p className={`${styles["roadmap-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/completed.png"}/> Completed Task</span></p>
                            <p className={`${styles["roadmap-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/ongoing.png"}/> Ongoing Task</span></p>
                            <p className={`${styles["roadmap-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/upcoming.png"}/> Upcoming Task</span></p>
                        </div>
                    }{activatedYear === "2021" &&
                        <div className={styles["task-container"]}>
                            <p className={`${styles["roadmap-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/completed.png"}/> Completed Task</span></p>
                            <p className={`${styles["roadmap-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/ongoing.png"}/> Ongoing Task</span></p>
                            <p className={`${styles["roadmap-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/upcoming.png"}/> Upcoming Task</span></p>
                        </div>
                    }{activatedYear === "2022" &&
                        <div className={styles["task-container"]}>
                            <p className={`${styles["roadmap-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/completed.png"}/> Completed Task</span></p>
                            <p className={`${styles["roadmap-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/ongoing.png"}/> Ongoing Task</span></p>
                            <p className={`${styles["roadmap-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/upcoming.png"}/> Upcoming Task</span></p>
                        </div>
                    }{activatedYear === "2023" &&
                        <div className={styles["task-container"]}>
                            <p className={`${styles["roadmap-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/completed.png"}/> Completed Task</span></p>
                            <p className={`${styles["roadmap-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/ongoing.png"}/> Ongoing Task</span></p>
                            <p className={`${styles["roadmap-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/upcoming.png"}/> Upcoming Task</span></p>
                        </div>
                    }{activatedYear === "Future" &&
                        <div className={styles["task-container"]}>
                            <p className={`${styles["roadmap-task"]} ${styles["link-task"]} ${murecho.className}`}><span className={styles["remark-span"]}><img className={styles["remark-icon"]} src={"/roadmap/upcoming.png"}/><Link className={styles["remark-link"]} href={""}>Upcoming Task Link</Link> <img className={styles["remark-link-icon"]} src={"/roadmap/link-icon.png"}/></span></p>
                        </div>
                    }
                </section>
            }
        </>
    );
}