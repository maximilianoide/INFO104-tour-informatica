import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
const Index = () => {
  return (
    <div className="container">
      <Head>
        <title>Tour Informatica</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
    

        <h1 className="title">Tour por el Edificio de Informática</h1>
        <div className="grid">
          <Link
            href={{
              pathname: "/page1",
              query: { opt: 0 },
            }}
          >
            <a className="card">Comenzar tour</a>
          </Link>
        </div>
      </main>
    </div>
  );
  
};

export default Index;
