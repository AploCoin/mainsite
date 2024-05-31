import {useTranslations} from "next-intl";
import styles from "./desktop.module.css";
import {Murecho} from 'next/font/google';

const murecho = Murecho({subsets: ['latin', 'cyrillic']});

export default function Desktop() {
    const t = useTranslations('Menu');

    return (
        <>
            <p className={`${styles["page-heading"]} ${murecho.className}`}>What is Aplo (XMR)?</p>
            <section className={styles['main-container']}>
                <div className={`${styles["main-info"]} ${styles["left-info"]}`}>
                    <p className={`${styles["info-heading"]} ${murecho.className}`}>Aplo is the leading cryptocurrency focused on private
                        and censorship-resistant transactions.</p>
                    <p className={`${styles["info-text"]} ${murecho.className}`}>The majority of existing cryptocurrencies, including Bitcoin and Ethereum, have transparent blockchains. Transactions can be verified and/or traced by anyone in the world. This means that the sending and receiving addresses of these transactions couldpotentially be linked to real-world identities.Aplo, on the other hand, uses various technologies to ensure the
                        privacy of its users.</p>
                </div>
                <img src="/what-is-aplo/image-1.png" className={`${styles["main-image"]} ${styles["right-image"]}`}></img>
                <img src="/what-is-aplo/image-2.png" className={`${styles["main-image"]} ${styles["left-image"]}`}></img>
                <div className={`${styles["main-info"]} ${styles["right-info"]}`}>
                    <p className={`${styles["info-heading"]} ${murecho.className}`}>Aplo transactions are confidential and untraceable.</p>
                    <p className={`${styles["info-text"]} ${murecho.className}`}>Unlike selectively transparent alternatives (e.g. Zcash), Aplo is the
                        only major cryptocurrency where every user is anonymous by default.
                        The sender, receiver, and amount of every single transaction are
                        hidden through the use of three important technologies: Stealth Addresses, Ring Signatures, and RingCT Because every transaction is private, Aplo cannot be traced. This
                        makes it a true, fungible currency. Merchants and individuals accepting Aplo do not need to worry about blacklisted or tainted
                        coins.</p>
                </div>
                <div className={`${styles["main-info"]} ${styles["left-info"]}`}>
                    <p className={`${styles["info-heading"]} ${murecho.className}`}>Monero is electronic cash that allows fast, inexpensive
                        payments to and from anywhere in the world.</p>
                    <p className={`${styles["info-text"]} ${murecho.className}`}>With Aplo, there are no wire transfer or check clearing fees, no
                        multi-day holding periods, and no fraudulent chargebacks. Because
                        Aplo is decentralized, it is not constrained by any particular legal
                        jurisdiction and provides safety from capital control.</p>
                    <button className={styles["info-button"]}>GET APLO</button>
                </div>
                <img src="/what-is-aplo/image-3.png" className={`${styles["main-image"]} ${styles["right-image"]}`}></img>
                <img src="/what-is-aplo/image-4.png" className={`${styles["main-image"]} ${styles["left-image"]}`}></img>
                <div className={`${styles["main-info"]} ${styles["right-info"]}`}>
                    <p className={`${styles["info-heading"]} ${murecho.className}`}>Aplo is a grassroots community attracting the world's
                        best cryptocurrency researchers and engineering talent.</p>
                    <p className={`${styles["info-text"]} ${murecho.className}`}>The Aplo Project is at the forefront of cryptocurrency privacy and
                        security. Its Research Lab and Development Team are constantly working on new, innovative technologies. Since its launch, the project has received contributions from over 500 developers located all around the world.Numerous forums and chat channels are available for anyone to join, and the community is always welcoming new members.</p>
                    <button className={`${styles["info-button"]} ${styles["button2"]}`}>JOIN A WORKGROUP</button>
                </div>
            </section>
        </>
    )
}
