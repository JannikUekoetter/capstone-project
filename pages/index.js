import Head from "next/head";
import styled from "styled-components";
import LostItem from "../components/LostItem";
import FoundItem from "../components/FoundItem";
import { lostItems, foundItems } from "../services/Db";
import { useState } from "react";
import { useStore } from "../store/useStore";
import BurgerMenu from "../components/BurgerMenu";

export default function Home() {
  const [searchTerm1, setSearchTerm1] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");

  const lostItems = useStore((state) => state.lostItems);

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
        <h1>LOSINGiT</h1>
        <br />
        <h2>Lost Items</h2>
        <div>
          <label htmlFor="inputSearchBar1">
            <br />
            <StyledSearchBar
              id="inputSearchBar1"
              type="text"
              placeholder="What are you looking for?"
              onChange={(event) => setSearchTerm1(event.target.value)}
            />
          </label>
        </div>
        <ul>
          {lostItems
            .filter((lostItem) =>
              lostItem.name.toLowerCase().includes(searchTerm1)
            )
            .map((lostItem) => (
              <LostItem
                name={lostItem.name}
                description={lostItem.description}
                img={lostItem.img}
                key={lostItem.id}
                id={lostItem.id}
              />
            ))}
        </ul>

        <div>
          <label htmlFor="inputSearchBar2">
            <br />
            <StyledSearchBar
              id="inputSearchBar2"
              type="text"
              placeholder="What are you looking for?"
              onChange={(event) => setSearchTerm2(event.target.value)}
            />
          </label>
        </div>
        <h1>Found Items</h1>
        <ul>
          {foundItems
            .filter((foundItem) =>
              foundItem.name.toLowerCase().includes(searchTerm2)
            )
            .map((foundItem) => (
              <FoundItem
                name={foundItem.name}
                description={foundItem.description}
                img={foundItem.img}
                key={foundItem.id}
                id={foundItem.id}
              />
            ))}
          console.log()
        </ul>
      </Main>
    </>
  );
}

const Main = styled.main`
  text-align: center;
`;

const StyledSearchBar = styled.input`
  border-radius: 1em;
  text-align: center;
  background-color: whitesmoke;
  width: 15em;
  height: 3em;
`;
