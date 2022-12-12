import Head from "next/head";
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="wrapper">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Link href="/">Home</Link>
      </div>
    </>
  );
}
