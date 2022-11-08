import React from "react";
import { useState } from "react";
import FoundItem from "../FoundItem";
import styled from "styled-components";
import { useStore } from "../../store/useStore";

export default function SearchFound() {
  const [searchTerm2, setSearchTerm2] = useState("");
  const foundItems = useStore((state) => state.foundItems);
  return (
    <Main>
      <div>
        <br />
        <br />
        <StyledHeadline>Found Items</StyledHeadline>
        <br />
        <br />
        <br />
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

      <StyledGrid>
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
      </StyledGrid>
    </Main>
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

const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 1em;
  padding: 2em;
  gap: 0.5em;
`;

const StyledHeadline = styled.h1`
  all: unset;
  font-size: 14rem;
  margin: 3em;
  width: 7em;
  height: 2em;
  position: relative;
  color: white;
  border-radius: 0.5em;
  outline: none;
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
  font-size: 2em;
  padding: 0.5em;
`;
