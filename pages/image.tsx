import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-3xl font-bold underline">About page</h1>
      {/* <img src="/images/elva-fairy-320w.jpg" /> */}
      {/* <img
        srcSet="/images/elva-fairy-800w.jpg 800w, /images/elva-fairy-480w.jpg 480w"
        sizes="(min-width: 600px) 800px, 480px
         "
        src="/images/elva-fairy-800w.jpg"
        alt="Elva dressed as a fairy"
      /> */}
      <Image
        src="/images/elva-fairy-800w.jpg"
        fill
        alt="test"
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </>
  );
}
