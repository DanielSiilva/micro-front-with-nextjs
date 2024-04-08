import Head from "next/head";
import styles from "../styles/Home.module.css";
import Cart from "../components/Cart";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Microfrontends Demo</title>
        <meta
          name="description"
          content="Demo for Microfrontends using Module Federation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Cart />
      </main>
    </div>
  );
}
