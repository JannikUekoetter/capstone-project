import Head from "next/head";
import styled from "styled-components";
import LostItem from "../components/LostItem";
import FoundItem from "../components/LostItem";
import { lostItems, foundItems } from "../components/Db";
import { useState } from "react";

export default function Home() {
  const [searchTerm1, setSearchTerm1] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1>Home Page</h1>

        <div>
          <label htmlFor="inputSearchBar1">
            Search
            <br />
            <input
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
        <h2>Second Array of Dummy Data begins here:</h2>
        <div>
          <label htmlFor="inputSearchBar2">
            Search
            <br />
            <input
              id="inputSearchBar2"
              type="text"
              placeholder="What are you looking for?"
              onChange={(event) => setSearchTerm2(event.target.value)}
            />
          </label>
        </div>
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
        </ul>
      </Main>
    </>
  );
}

const Main = styled.main`
  text-align: center;
`;
