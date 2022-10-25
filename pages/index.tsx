import type {NextPage} from "next";
import Head from "next/head";
import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lil Nouns Online</title>
        <meta name="description" content="Live feed of what happens in the community"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className="relative pt-6">
        <Header />

        <Content />

        {/*<Footer />*/}
      </div>
    </>
  );
};

export default Home;
