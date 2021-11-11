import styles from './navigation.module.scss'

const NavigationView = ({ isShowMenu, setIsShowMenu, setIsFirstSlide }) => (
    <>
        {!isShowMenu ? <div onClick={() => setIsShowMenu(true)} className={styles.hambuger}></div> : null}

        <div className={styles.navWraper}>
            <nav className={isShowMenu ? styles.navShow : styles.navHide}>
                <div onClick={() => setIsShowMenu(false)} className={styles.close}></div>

                <ul className={styles.navItem}>
                    <li onClick={() => setIsFirstSlide(true)}>Slide One</li>
                    <li onClick={() => setIsFirstSlide(false)}>Slide Two</li>
                </ul>
            </nav>
        </div>
    </>
);

export default NavigationView;