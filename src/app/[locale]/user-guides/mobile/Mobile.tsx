import {useTranslations} from "next-intl";
import styles from "./mobile.module.css";
import {Murecho} from 'next/font/google';
import Link from "next/link";

const murecho = Murecho({subsets: ['latin', 'cyrillic']});

export default function Mobile() {
    const t = useTranslations('UserGuide');

    return (
        <>
            <p className={`${styles["page-heading"]} ${murecho.className}`}>{t('pageHeading')}</p>
            <section className={styles["main-container"]}>
                <div className={styles["guide-container"]}>
                    <p className={`${styles["guide-heading"]} ${murecho.className}`}>{t('general')}</p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('generalLinks.createPaperWallet')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('generalLinks.makePayment')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('generalLinks.provePayment')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('generalLinks.joinMatrixServer')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                </div>
                <div className={styles["guide-container"]}>
                    <p className={`${styles["guide-heading"]} ${murecho.className}`}>{t('mining')}</p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('miningLinks.mineOnPool')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('miningLinks.soloMine')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                </div>
                <div className={styles["guide-container"]}>
                    <p className={`${styles["guide-heading"]} ${murecho.className}`}>{t('backup')}</p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('backupLinks.offlineBackup')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                </div>
                <div className={styles["guide-container"]}>
                    <p className={`${styles["guide-heading"]} ${murecho.className}`}>{t('nodeAndSync')}</p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('nodeAndSyncLinks.connectRemoteNode')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('nodeAndSyncLinks.importBlockchain')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('nodeAndSyncLinks.runNodeVPS')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                </div>
                <div className={styles["guide-container"]}>
                    <p className={`${styles["guide-heading"]} ${murecho.className}`}>{t('recovery')}</p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('recoveryLinks.fixLockedFunds')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('recoveryLinks.restoreFromKeys')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('recoveryLinks.restoreFromSeed')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                </div>
                <div className={styles["guide-container"]}>
                    <p className={`${styles["guide-heading"]} ${murecho.className}`}>{t('wallets')}</p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('walletsLinks.cliWalletGuide')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('walletsLinks.guiWalletGuide')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('walletsLinks.changeRestoreHeight')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('walletsLinks.viewOnlyWallet')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('walletsLinks.scanMissingTransaction')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('walletsLinks.verifySoftwareCLI')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('walletsLinks.verifySoftwareWindows')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('walletsLinks.multisigTransactions')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                </div>
                <div className={styles["guide-container"]}>
                    <p className={`${styles["guide-heading"]} ${murecho.className}`}>{t('hardwareWallets')}</p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('hardwareWalletsLinks.useLedger')}<img className={styles["guides-link-image"]} src={"/user-guides/main-icon.png"}/></span></Link></p>
                </div>
                <div className={styles["guide-container"]}>
                    <p className={`${styles["guide-heading"]} ${murecho.className}`}>{t('anonymizingNetworks')}</p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('anonymizingNetworksLinks.connectTor')}<img className={styles["guides-link-image2"]} src={"/user-guides/onion-icon.png"}/></span></Link></p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('anonymizingNetworksLinks.runNodeI2P')}<img className={styles["guides-link-image2"]} src={"/user-guides/onion-icon.png"}/></span></Link></p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('anonymizingNetworksLinks.useCLIWithQubesWhonix')}<img className={styles["guides-link-image2"]} src={"/user-guides/onion-icon.png"}/></span></Link></p>
                    <p className={`${styles["guide-link"]} ${murecho.className}`}><Link href={""}><span className={styles["guide-link-span"]}>{t('anonymizingNetworksLinks.useTails')}<img className={styles["guides-link-image2"]} src={"/user-guides/onion-icon.png"}/></span></Link></p>
                </div>
            </section>
        </>
    )
}
