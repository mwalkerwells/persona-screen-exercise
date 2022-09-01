import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.css";
import ConfirmationModal from "../components/ConfirmationModal";

const Home: NextPage = () => {
  function onConfirm() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }

  return (
    <div>
      <Head>
        <title>Persona Interview</title>
      </Head>

      <main className={styles.main}>
        <ConfirmationModal onConfirm={onConfirm} />
      </main>
    </div>
  );
};

export default Home;
