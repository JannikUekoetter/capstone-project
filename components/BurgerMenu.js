import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function BurgerMenu() {
  return (
    <StyledDiv>
      <h1>Navigation</h1>

      <nav>
        <StyledList>
          <NavListItem>
            <Link href="/searchlost">Search Lost Items</Link>
          </NavListItem>
          <NavListItem>
            <Link href="/addlost">Add Lost Items</Link>
          </NavListItem>
          <NavListItem>
            <Link href="/searchfound">Search Found Items</Link>
          </NavListItem>
          <NavListItem>
            <Link href="/addfound">Add Found Items</Link>
          </NavListItem>
        </StyledList>
      </nav>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  text-align: left;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0.5em;
  font-size: 0.9em;
  margin-bottom: 2em;
`;

const NavListItem = styled.li`
  padding: 0.5em;
`;
