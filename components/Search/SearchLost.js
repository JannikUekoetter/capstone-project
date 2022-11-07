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
            placeholder="What are you looking for?"
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
  margin: 2em;
  padding: 2em;
  gap: 1em;
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
  transition: ease-out 0.9s;
  outline: none;
  background: linear-gradient(
    99.89deg,
    #ecedf0 9.59%,
    rgba(227, 229, 241, 0.78) 83.75%
  );
  background-size: 400%;
  background-position: 0% 0%;
  font-size: 2em;
  padding: 0.5em;
`;
