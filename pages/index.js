import Head from "next/head";
import dynamic from "next/dynamic";
import styled from "styled-components";
import BurgerMenu from "../components/BurgerMenu";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>LOSINGiT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <BurgerMenu />
      </nav>
      <Main>
        <h1>Welcome to LOSINGiT!</h1>
        <h2>Have you lost or found something? Then check our map!</h2>
        <Map />
      </Main>
    </>
  );
}

const Main = styled.main`
  text-align: center;
`;
