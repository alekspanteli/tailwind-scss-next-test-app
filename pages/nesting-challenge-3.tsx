import Head from "next/head";
import styles from "@/pages/nesting-challenge-3.module.scss";

export default function Nesting2() {
  return (
    <>
      <Head>
        <title>Nesting 3</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <section className={`${styles.error} ${styles.color}`}>test</section> */}
      <h1 className="text-3xl font-bold underline">Nesting 3 page</h1>
      <section className={styles['surface-primary']}>
        <div className={styles.container}>
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            similique, at incidunt consequuntur, eveniet dignissimos asperiores
            sequi quas adipisci repellat placeat! Pariatur praesentium explicabo
            consequatur.
          </p>
          <p className={styles['text-subdued']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            earum dicta voluptatum amet ipsam sed accusamus quia illum quibusdam
            maxime.
          </p>
          <a href="" className={styles.btn}>
            Lorem, ipsum
          </a>
        </div>
      </section>
      <section className={styles['surface-secondary']}>
        <div className={styles.container}>
          <h2>Illum, quos architecto!</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            similique, at incidunt consequuntur, eveniet dignissimos asperiores
            sequi quas adipisci repellat placeat! Pariatur praesentium explicabo
            consequatur.
          </p>
          <p className={styles['text-subdued']}>
            Quibusdam assumenda obcaecati nostrum, eos, necessitatibus sequi
            quod iure ratione, molestiae quaerat alias molestias rem. Aut
            eligendi laborum quae veritatis!
          </p>
          <a href="" className={styles.btn}>
            Quod, ducimus
          </a>
        </div>
      </section>
      <section className={styles['surface-accent']}>
        <div className={styles.container}>
          <h2>Culpa, dolorum aliquid.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            similique, at incidunt consequuntur, eveniet dignissimos asperiores
            sequi quas adipisci repellat placeat! Pariatur praesentium explicabo
            consequatur.
          </p>
          <p className={styles['text-subdued']}>
            Praesentium veniam excepturi quia possimus sint nulla repellendus
            aperiam nemo, saepe dicta, ad, deleniti mollitia optio vitae
            eligendi est a.
          </p>
          <a href="" className={styles.btn}>
            Doloribus, voluptatibus
          </a>
        </div>
      </section>
    </>
  );
}
