import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nesting</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-3xl font-bold underline">Nesting</h1>
      <article className="card">
        <h2 className="card-title">Title</h2>
        <p className="body">Text goes here</p>
        <a href="" className="card-link">Link</a>
      </article>
      <article className="primary-article">
        <h2 className="title">
          <span>Title</span>
        </h2>
        <ul className="pointing-list">
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ul>
      </article>
    </>
  );
}
