'use client';
import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <>
            <p className={styles["heading"]}>404</p>
            <p className={styles["text"]}>Page not found (perhaps it values privacy)</p>
            <button className={styles["return-button"]}></button>
        </>
    )
}