import React from "react";
import { useState } from "react";
import FoundItem from "../FoundItem";
import styled from "styled-components";
import { useStore } from "../../store/useStore";
import BurgerMenu from "../BurgerMenu";

export default function SearchFound() {
  const [searchTerm2, setSearchTerm2] = useState("");
  const foundItems = useStore((state) => state.foundItems);
  return (
    <>
      <BurgerMenu />
      <Main>
        <StyledHeadline>Found Items</StyledHeadline>

        <label htmlFor="inputSearchBar2">
          <StyledSearchBar
            id="inputSearchBar2"
            type="text"
            placeholder="Search..."
            onChange={(event) => setSearchTerm2(event.target.value)}
          />
        </label>

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
    </>
  );
}

const Main = styled.main`
  text-align: center;
`;

const StyledSearchBar = styled.input`
  all: unset;
  margin-top: 2em;
  width: 6em;
  height: 1em;
  color: white;
  border-radius: 0.5em;
  background-image: linear-gradient(
    to top,
    #bdc2e8 0%,
    #bdc2e8 1%,
    #e6dee9 100%
  );
  background-size: 400%;
  background-position: 0% 0%;
  font-size: 1.5em;
  padding: 0.5em;
  cursor: pointer;
`;

const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 1em;
  margin-left: 2em;
  gap: 1em;
`;

const StyledHeadline = styled.h1`
  all: unset;
  margin-left: 3em;
  margin-top: 2em;
  width: 7em;
  height: 1.5em;
  position: relative;
  color: white;
  border-radius: 0.5em;
  outline: none;
  background-image: radial-gradient(
    105.38% 477.9% at 82.97% -65.91%,
    #10c7ec 0%,
    #6d38cd 91.02%
  );
  background-size: 400%;
  background-position: 0% 0%;
  font-size: 2em;
  padding: 0.5em;
`;
