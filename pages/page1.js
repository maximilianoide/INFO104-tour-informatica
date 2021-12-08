import Head from "next/head";
import Escena from "../components/escena";

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3004/data/EDINFO.json");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default function Page1({ data }) {
  return (
    <div className="container">
      <Head>
        <title>Tour Informatica</title>
      </Head>
      <Escena escenas={data}></Escena>
    </div>
  );
}
