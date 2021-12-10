import Head from "next/head";
import Link from "next/link";
const Index = () => {
  return (
    <div className="paginaInicio">
      <Head>
        <title>Tour Informatica</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Tour por el Edificio de Informática</h1>
        <Link
          className="test"
          href={{
            pathname: "/page1",
            query: { opt: 0 },
          }}
        >
          <a className="card">Comenzar tour</a>
        </Link>
      </main>
    </div>
  );
};

export default Index;
