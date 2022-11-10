import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function BurgerMenu() {
  return (
    <StyledDiv>
      <h1>Logo</h1>

      <nav>
        <StyledList className="nav__links">
          <NavListItem>
            {" "}
            <Link href="/" className="#">
              <Anchor>Home</Anchor>
            </Link>
          </NavListItem>
          <NavListItem>
            {" "}
            <Link href="/searchlost" className="#">
              <Anchor>Search Lost </Anchor>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link href="/addlost" className="#">
              <Anchor>Add Lost</Anchor>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link href="/searchfound" className="#">
              <Anchor>Search Found</Anchor>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link href="/addfound" className="#">
              <Anchor>Add Found</Anchor>
            </Link>
          </NavListItem>
        </StyledList>
      </nav>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-image: radial-gradient(
    105.38% 477.9% at 82.97% -65.91%,
    #10c7ec 0%,
    #6d38cd 91.02%
  );
  background-blend-mode: lighten;
  border-radius: 1em;
  margin-bottom: 4em;
  width: 100%;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 1.5em;
  font-size: 0.9em;
`;

const NavListItem = styled.li`
  font-size: 1.2em;
  padding: 0.5em;
`;

const Anchor = styled.a`
  text-decoration: none;
  font-size: 1.2em;
  color: white;
  cursor: pointer;
  transition: ease-out 0.5s;
  padding: 1em;

  &:hover {
    box-shadow: inset 8em 0 0 0 darkblue;
    border-radius: 1em;
  }
`;

const Nav = styled.nav`
  width: 100vh;
`;
