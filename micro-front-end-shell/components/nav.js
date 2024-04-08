import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => (
  <div className={styles.nav}>
    <Link href="/mario">App 01</Link>
    <Link href="/">Home</Link>
    <Link href="/luigi">App 02</Link>
  </div>
);

export default Nav;
