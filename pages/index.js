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
        <Image
          className="ImgInicio"
          src="/images/edificio.png"
          height={294} // Desired size with correct aspect ratio
          width={470} // Desired size with correct aspect ratio
          alt="edificio"
        />

        <h1 className="title">TOUR POR EL EDIFICIO DE INFORMÁTICA</h1>
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
