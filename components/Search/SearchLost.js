import React from "react";
import styled from "styled-components";
import LostItem from "../LostItem";
import { lostItems } from "../../services/Db";
import { useState } from "react";
import { useStore } from "../../store/useStore";

export default function SearchLost() {
  const [searchTerm1, setSearchTerm1] = useState("");
  const lostItems = useStore((state) => state.lostItems);

  return (
    <Main>
      <StyledHeadline>Lost Items</StyledHeadline>
      <div>
        <label htmlFor="inputSearchBar1">
          <br />
          <StyledSearchBar
            id="inputSearchBar1"
            type="text"
            placeholder="search anything"
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
  );
}

const Main = styled.main`
  text-align: center;
`;

const StyledSearchBar = styled.input`
  color: #171717;
`;

const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 2em;
  padding: 2em;
  gap: 1em;
`;

const StyledHeadline = styled.h1`
  margin: 2em;
`;
