import React from "react";
import { useState } from "react";
import FoundItem from "../FoundItem";
import styled from "styled-components";
import { useStore } from "../../store/useStore";
import NavigationBar from "../NagivationBar";

export default function SearchFound() {
  const [searchTerm2, setSearchTerm2] = useState("");
  const foundItems = useStore((state) => state.foundItems);
  return (
    <>
      <NavigationBar />

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
  margin-bottom: 1em;
  width: 75%;
`;

const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const StyledHeadline = styled.h1`
  color: white;
  border-radius: 0.5em;
  transition: ease-out 0.9s;
  background-image: radial-gradient(
    105.38% 477.9% at 82.97% -65.91%,
    #10c7ec 0%,
    #6d38cd 91.02%
  );
  background-size: 400%;
  background-position: 0% 0%;
  font-size: 1.4em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.8em 2.5em;
  text-align: center;
  place-self: center;
  margin-top: 2em;
  margin-bottom: 1.5em;
`;
