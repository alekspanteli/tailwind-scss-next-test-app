import Head from "next/head";
import styles from "@/pages/variables.module.scss";

export default function Variables() {
  return (
    <>
      <Head>
        <title>Variables</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-3xl font-bold underline mb-4">Variables page</h1>
      <div className={styles.box}>
        <a className={styles.link}>Link</a>
      </div>
      <h1 className="text-3xl font-bold underline mb-4">
        Global local variables
      </h1>
      <div className={styles["test-1"]}>
        <a className={styles["test-1__link"]}>Link</a>
        <h6 className={styles.customTitle}>Custom title</h6>
      </div>
    </>
  );
}
