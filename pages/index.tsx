import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="wrapper">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <p className="test">test</p>
      </div>
    </>
  );
}
