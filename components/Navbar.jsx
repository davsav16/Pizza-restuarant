import styles from "../styles/Navbar.module.css"
import Image from "next/image";

const Navbar = () => {
    return (
        <>
        <div className={styles.header}>McDougal Famous Pizza</div>
        <div className={styles.container}>
            <div className={styles.item} id="test">
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="Cartoon Phone" width="32px" height="32px"/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>Order Now!</div>
                    <div className={styles.text}>111-222-3333</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Homepage</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item} id={styles.testing}>
                <div className={styles.cart}>
                <Image src="/img/cart.png" alt="Cartonn Pizza" width="30px" height="30px"/>
                <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;