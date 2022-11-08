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
        <StyledHeadline>Welcome to LOSINGiT!</StyledHeadline>
        <StyledH2>
          Lost or Found something? <br />
          Check our map!
        </StyledH2>

        <Map />
      </Main>
    </>
  );
}

const Main = styled.main`
  text-align: center;
`;

const StyledHeadline = styled.h1`
  color: white;
  border-radius: 0.5em;
  transition: ease-out 0.9s;

  background-size: 400%;
  background-position: 0% 0%;
  font-size: 1.4em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.8em 2.5em;
  text-align: center;
  place-self: center;
  background-image: linear-gradient(
    90deg,
    #0065ff,
    #6942ef,
    #6554c0,
    #008cff,
    #0065ff,
    #6942ef
  );
`;

const StyledH2 = styled.h2`
  color: white;
  border-radius: 0.5em;
  transition: ease-out 0.9s;
  background-image: linear-gradient(
    90deg,
    #0065ff,
    #6942ef,
    #6554c0,
    #008cff,
    #0065ff,
    #6942ef
  );
  background-size: 400%;
  background-position: 0% 0%;
  font-size: 1.2em;
  padding: 0.8em 2.5em;
  text-align: center;
  place-self: center;
  margin-top: 1em;
  width: 15em;
`;
