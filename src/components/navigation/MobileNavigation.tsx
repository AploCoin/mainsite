import styles from './mobile.module.css';

export default function MobileNavigation() {
    return (
        <div className='flex flex-column'>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Get started</button>
                <div className={styles['dropdown-content']}>
                    <a href="#">What is aplo?</a>
                    <a href="#">Mining</a>
                    <a href="#">FAQ</a>
                </div>
            </div>

            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Resources</button>
                <div className={styles['dropdown-content']}>
                    <a href="#">About</a>
                    <a href="#">Roadmap</a>
                    <a href="#">User guides</a>
                </div>
            </div>

            <a href="#" className={styles.donatebtn}>Donate</a>
        </div>
    );
}
