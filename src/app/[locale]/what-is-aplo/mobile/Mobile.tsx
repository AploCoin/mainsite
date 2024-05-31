import styles from "./mobile.module.css";
import {Murecho} from 'next/font/google';
import {useTranslations} from "next-intl";

const murecho = Murecho({subsets: ['latin', 'cyrillic']});

export default function Mobile() {
    const t = useTranslations('Menu');

    return (
        <>
            <p className={`${styles["page-heading"]} ${murecho.className}`}>What is Monero (XMR)?</p>
            <section className={styles["main-section"]}>
                <div className={styles["main-info"]}>
                    <p className={`${styles["info-heading"]} ${murecho.className}`}>Monero is the leading cryptocurrency
                        focused on private and censorship-
                        resistant transactions.</p>
                    <p className={`${styles["info-text"]} ${murecho.className}`}>The majority of existing cryptocurrencies, including Bitcoin and Ethereum, have transparent blockchains. Transactions can be verified and/or traced by anyone in the world. This means that the sending and receiving addresses of these transaction could potentially be linked to real-world
                        identities.
                        Monero, on the other hand, uses various technologies to ensure the privacy of its users.</p>
                </div>
                <img src={"/what-is-aplo/image-1.png"} className={styles["main-image"]}/>
                <div className={styles["main-info"]}>
                    <p className={`${styles["info-heading"]} ${murecho.className}`}>Monero transactions are confidential and untraceable.</p>
                    <p className={`${styles["info-text"]} ${murecho.className}`}>Unlike selectively transparent alternatives (e.g. Zcash), Monero is the only major cryptocurrency where every user is anonymous by default. The sender, receiver, and amount of every single transaction are hidden through the use of three important technologies: StealtA Addresses , Ring Signatures0, and RingC
                        Because every transaction is private, Monero cannot be traced. This makes it a true, fungible currency. Merchants and individuals accepting Monero do not need to worry about blacklisted or tainted coins.</p>
                </div>
                <img src={"/what-is-aplo/image-2.png"} className={styles["main-image"]}/>
                <div className={styles["main-info"]}>
                    <p className={`${styles["info-heading"]} ${murecho.className}`}>Monero is electronic cash that allows
                        fast, inexpensive payments to and from
                        anywhere in the world.</p>
                    <p className={`${styles["info-text"]} ${murecho.className}`}>With Monero, there are no wire transfer or
                        check clearing fees, no multi-day holding
                        periods, and no fraudulent chargebacks.
                        Because Monero is decentralized, it is not
                        constrained by any particular legal
                        jurisdiction and provides safety from capital
                        control.</p>
                    <button className={styles["main-button"]}>GET APLO</button>
                </div>
                <div className={styles["main-info"]}>
                    <p className={`${styles["info-heading"]} ${murecho.className}`}>Monero is a grassroots community
                        attracting the world's best
                        cryptocurrency researchers and
                        engineering talent.</p>
                    <p className={`${styles["info-text"]} ${murecho.className}`}>The Monero Project is at the forefront of cryptocurrency privacy and security. Its Research Lab and Development Team are constantly working on new, innovative technologies. Since its launch, the project has received contributions from over 500 developers located all around the world.
                        Numerous forums and chat channels are available for anyone to join, and the community is always welcoming new members.</p>
                    <button className={styles["main-button"]}>JOIN A WORKGROUP</button>
                </div>
            </section>
        </>
    )
}
