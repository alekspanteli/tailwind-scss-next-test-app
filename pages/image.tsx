import Head from "next/head";
import Image from "next/image";
import styles from "@/pages/image.module.scss";

export default function Images() {
  return (
    <>
      <Head>
        <title>Images</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-3xl font-bold underline">Images page</h1>
      {/* <img src="/images/elva-fairy-320w.jpg" /> */}
      <img
        srcSet="/images/elva-fairy-480w.jpg 480w, /images/elva-fairy-800w.jpg 800w"
        sizes="(min-width: 1000px) 800px, 480px
         "
        src="/images/elva-fairy-800w.jpg"
        alt="Elva dressed as a fairy"
      />
      {/* <Image
        src="/images/elva-fairy-800w.jpg"
        alt="test"
        width={200}
        height={200}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      /> */}
      {/* <img
          src="/images/cat-500.jpg"
          className={styles.myimage}
          srcSet="/images/cat-500.jpg 500w,
                /images/cat-1000.jpg 1000w,
                /images/cat-1500.jpg 1500w"
          sizes="(min-width: 760px) 1000px, 100vw"
          alt="Test image"
        /> */}
    </>
  );
}
