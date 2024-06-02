import {useTranslations} from "next-intl";
import styles from "./desktop.module.css";
import {Murecho} from 'next/font/google';
import Link from "next/link";

const murecho = Murecho({subsets: ['latin', 'cyrillic']});

export default function Desktop() {
    const t = useTranslations('Menu');

    return (
        <>
            <section className={styles['header-container']}>
                <p className={`${styles["header-heading"]} ${murecho.className}`}>Donate to the Aplo Project</p>
                <p className={`${styles["header-text"]} ${murecho.className}`}>By donating to the following Monero address (General Fund), you are supporting the Monero Project. If you wish to donate to a
                    specific proposal, please see <Link href={""}><span className={styles["header-link"]}>Funding Required</span></Link></p>
            </section>
            <section className={styles['main-container']}>
                <div className={styles["info-container"]}>
                    <p className={`${styles["info-heading"]} ${murecho.className}`}>Contribute with a QR code</p>
                    <p className={`${styles["info-instruction"]} ${murecho.className}`}>1. Choose the amount of XMR you wish to contribute to this proposal</p>
                    <p className={`${styles["info-instruction"]} ${murecho.className}`}>2. Scan this QR code or tap to open in your Monero wallet app:</p>
                    <img src={"/donate-to-aplo/qr.png"} className={styles["qr-image"]}></img>
                    <p className={`${styles["info-instruction"]} ${murecho.className}`}>OR</p>
                    <p className={`${styles["info-instruction"]} ${murecho.className}`}>Enter the following XMR address:</p>
                    <p className={`${styles["token"]} ${murecho.className}`}>888tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogD avup3H</p>
                    <p className={`${styles["info-instruction"]} ${murecho.className}`}>3. Send! Thank you! Monero is grateful to you.</p>
                    <p className={`${styles["remark"]} ${murecho.className}`}>Your contribution should be visible within 5 minutes of you sending your contribution. If for some reason it is not there, please contact a member of the Core Team!</p>
                </div>
            </section>
        </>
    )
}