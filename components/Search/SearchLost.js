import React from "react";
import styled from "styled-components";
import LostItem from "../LostItem";
import { lostItems } from "../../services/Db";
import { useState } from "react";
import { useStore } from "../../store/useStore";
import NavigationBar from "/components/NagivationBar";

export default function SearchLost() {
  const [searchTerm1, setSearchTerm1] = useState("");
  const lostItems = useStore((state) => state.lostItems);

  return (
    <>
      <NavigationBar />
      <Main>
        <StyledHeadline>Lost Items</StyledHeadline>
        <div>
          <label htmlFor="inputSearchBar1">
            <StyledSearchBar
              id="inputSearchBar1"
              type="text"
              placeholder="search..."
              onChange={(event) => setSearchTerm1(event.target.value)}
            />
          </label>
        </div>
        <StyledGrid>
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
`;

const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const StyledHeadline = styled.h1`
  all: unset;

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
  font-size: 1.3em;
  padding: 0.5em;
`;
