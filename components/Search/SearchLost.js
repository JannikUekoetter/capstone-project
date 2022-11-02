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
