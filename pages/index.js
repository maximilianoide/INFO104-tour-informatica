import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
const Index = () => {
  return (
    <div className="container">
      <Head>
        <title>INFO104 Nextjs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          src="/images/edificio.png"
          height={294} // Desired size with correct aspect ratio
          width={470} // Desired size with correct aspect ratio
          alt="edificio"
        />

        <h1 className="title">TOUR POR EL EDIFICIO DE INFORMÁTICA</h1>

        <p className="description">
          Este código está en <code>pages/index.js</code>
        </p>

        <div className="grid">
          <Link
            href={{
              pathname: "/page1",
              query: { opt: 0 },
            }}
          >
            <a className="card">Comenzar tour</a>
          </Link>
          <Link
            href={{
              pathname: "/page1",
            }}
          >
            <a className="card">Ver edificio desde fuera</a>
          </Link>
          <Link
            href={{
              pathname: "/page1",
              query: { opt: 2 },
            }}
          >
            <a className="card">Boton extra ._.xD</a>
          </Link>
        </div>
      </main>

      <footer>
        <a href="https://github.com/PabloSzx/INFO104-2021-1" target="_blank">
          Repositorio y tutorial
        </a>
        &nbsp;-&nbsp;
        <Link href="/about">
          <a>Sobre esta página</a>
        </Link>
      </footer>
    </div>
  );
};

export default Index;
