import Head from "next/head";
import styles from "@/pages/variables-cases.module.scss";
import { clsx } from "clsx";

export default function VariablesCases() {
  return (
    <>
      <Head>
        <title>Variables</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-3xl font-bold underline mb-4">Variables Cases</h1>
      {/* Card varialbes challenge */}
      <div className={styles.card}>
        <h2 className={styles["card__title"]}>This is a card</h2>
        <p className={styles["card__text"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className={styles["flex-group"]}>
          <a href="#" className={clsx("btn", styles["btn--primary"])}>
            Buy now
          </a>
          <a href="#" className={clsx("btn", styles["btn--outline"])}>
            More info
          </a>
        </div>
      </div>
    </>
  );
}
