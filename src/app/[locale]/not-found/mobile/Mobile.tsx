import styles from "./mobile.module.css";
import {Murecho} from 'next/font/google';
import Link from "next/link";
import { usePathname } from "next/navigation";

const murecho = Murecho({subsets: ['latin', 'cyrillic']});

export default function Mobile() {
    const pathname = usePathname();
    const lang = pathname.substring(1, 3);
    return (
        <div className={styles["container"]}>
            <p className={`${styles["heading"]} ${murecho.className}`}>Not Found</p>
            <p className={`${styles["text"]} ${murecho.className}`}>Page not found (perhaps it values privacy)</p>
            <button className={styles["return-button"]}><Link href={`/${lang}/`} target="_self" className={styles["button-text"]}>To the Homepage</Link></button>
        </div>
    );
}