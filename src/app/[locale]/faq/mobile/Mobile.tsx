"use client";

import { useTranslations } from "next-intl";
import styles from "./mobile.module.css";
import { Murecho } from 'next/font/google';
import Link from "next/link";


const murecho = Murecho({ subsets: ['latin', 'cyrillic'] });

export default function Mobile() {
    const t = useTranslations("Faq");

    return (
        <>
            <p className={`${styles["page-heading"]} ${murecho.className}`}>FAQ</p>
            <p className={`${styles["page-description"]} ${murecho.className}`}>Find answers to recurring questions and concerns about Aplo.</p>
            <section className={styles["double-section"]}>
                <div className={styles["double-section-left"]}>
                    <div className={styles["left-container"]}>
                        <p className={`${styles["section-heading"]} ${murecho.className}`}>Table Of Contents</p>
                        <p className={`${styles["links-heading"]} ${murecho.className}`}>Basics</p>
                        <div className={styles["links-paragraph"]}>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>What's the meaning of [technical word]?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>How can I contribute?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>How can I get Aplo?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>How is Aplo different from Bitcoin?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>Why is Aplo called 'Aplo'?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>Is it true that Aplo has a hard fork every 6 months?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>Are there videos I can watch to learn about Aplo?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>Does Aplo have a block size limit?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>Is Aplo a mixer or mixing service?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        </div>
                        <p className={`${styles["links-heading"]} ${murecho.className}`}>Privacy</p>
                        <div className={styles["links-paragraph"]}>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>How is Aplo’s privacy different from other coins?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>Is Aplo magic and protects my privacy no matter what I do?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>Is Aplo 100% anonymous?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        </div>
                        <p className={`${styles["links-heading"]} ${murecho.className}`}>Security</p>
                        <div className={styles["links-paragraph"]}>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>What is ASIC resistance? Why is it important?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>Are there known vulnerabilities in Aplo?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>Why is my antivirus/firewall flagging the Aplo software i just downloaded as malware?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        </div>
                        <p className={`${styles["links-heading"]} ${murecho.className}`}>Economics</p>
                        <div className={styles["links-paragraph"]}>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>How does Aplo have value?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>What is fungibility, and why is it important?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>If Aplo is so private how do we know they're not being created out of thin air?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>What is Aplo's maximum supply?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>Why does Aplo not have a maximum supply?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        </div>
                        <p className={`${styles["links-heading"]} ${murecho.className}`}>Wallets</p>
                        <div className={styles["links-paragraph"]}>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>What is the difference between a lightweight and a normal wallet?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>What wallet should I use?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>I can't see my funds. Did I just lose all my Aplo?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>I haven't touched my Aplo in a long time, did I lose my coins as a consequence of a hard fork (network upgrade)?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>Why is my wallet taking so long to sync?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>Why my wallet needs to be scanned everytime I open it?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        </div>
                        <p className={`${styles["links-heading"]} ${murecho.className}`}>Node</p>
                        <div className={styles["links-paragraph"]}>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>Can I manually import the blockchain?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>How can I connect my node via Tor?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>How do I decide if I should run a full node or a pruned node?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>How big is the Aplo blockchain?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>Why does the blockchain need so much space?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>Can I avoid downloading the entire blockchain?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>Is it dangerous to run a personal node?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                            <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={styles["page-link-span"]}>Is it dangerous to use a remote node? What's the data a node operator can get from me?<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        </div>
                    </div>
                </div>
                <div className={styles["double-section-right"]}>
                    <div className={styles["right-container"]}>
                        <p className={`${styles["section-heading"]} ${murecho.className}`}>Resources & Help</p>
                        <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={`${styles["page-link-span"]} ${styles["right-link-heading"]}`}>User Guides<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        <p className={`${styles["page-text"]} ${murecho.className}`}>A collection of documents to help users interact with the Aplo network and its components.</p>
                        <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={`${styles["page-link-span"]} ${styles["right-link-heading"]}`}>Developer Guides<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        <p className={`${styles["page-text"]} ${murecho.className}`}>Guides and resources for developers.</p>
                        <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={`${styles["page-link-span"]} ${styles["right-link-heading"]}`}>StackExchange<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        <p className={`${styles["page-text"]} ${murecho.className}`}>One of the most complete resources about Aplo. If you have a question which is not in this FAQ, you will likely find the answer on the Aplo StackExchange.</p>
                        <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={`${styles["page-link-span"]} ${styles["right-link-heading"]}`}>r/monerosupport<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        <p className={`${styles["page-text"]} ${murecho.className}`}>The subreddit dedicated to help Aplo users. Basically community members helping each others. Use the search option.</p>
                        <p className={`${styles["page-link"]} ${murecho.className}`}><Link href={""}><span className={`${styles["page-link-span"]} ${styles["right-link-heading"]}`}>Monero.how<img className={styles["page-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                        <p className={`${styles["page-text"]} ${murecho.className}`}>Old and known resources with a good number of guides and howto's</p>
                    </div>
                </div>
            </section>
            <section className={styles["main-section"]}>
                <div className={styles["main-container"]}>
                    <p className={`${styles["section-heading"]} ${murecho.className}`}>Basics</p>
                    <p className={`${styles["paragraph-heading"]} ${murecho.className}`}>What's the meaning of [technical word]?</p>
                    <p className={`${styles["paragraph-text"]} ${murecho.className}`}>The terminology used in Monero can be quite complex, for this reason we have the <Link href={""}><span className={styles["paragraph-link"]}>Moneropedia</span></Link>. A comprehensive list of terms that you often see and their explanation. If you don't know what a word means or you would like to have more info about it, just visit the Moneropedia. Some example of often searched terms are: <Link href={""}><span className={styles["paragraph-link"]}>node</span></Link>, <Link href={""}><span className={styles["paragraph-link"]}>fungbility</span></Link>, <Link href={""}><span className={styles["paragraph-link"]}>view key</span></Link>, <Link href={""}><span className={styles["paragraph-link"]}>pruning</span></Link>.</p>
                    <p className={`${styles["more-link"]} ${murecho.className}`}>
                        <span>More Info: </span>
                        <Link href="">
                            <span className={`${styles["page-link-span"]}`}>
                                Getting started with Aplo
                                <img className={styles["page-link-image"]} src="/user-guides/main-icon.png"/>
                            </span>
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
}
