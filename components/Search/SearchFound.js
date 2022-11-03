import React from "react";
import { useState } from "react";
import FoundItem from "../FoundItem";
import styled from "styled-components";
import { foundItems } from "../../services/Db";
import { useStore } from "../../store/useStore";

export default function SearchFound() {
  const [searchTerm2, setSearchTerm2] = useState("");
  const foundItems = useStore((state) => state.foundItems);
  return (
    <Main>
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
      </ul>
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
