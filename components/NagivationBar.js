import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function BurgerMenu() {
  return (
    <StyledDiv>
      <StyledList>
        <NavListItem>
          <Link href="/">
            <Anchor>Home</Anchor>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/searchlost">
            <Anchor>Search Lost </Anchor>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/addlost">
            <Anchor>Add Lost</Anchor>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/searchfound">
            <Anchor>Search Found</Anchor>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/addfound">
            <Anchor>Add Found</Anchor>
          </Link>
        </NavListItem>
      </StyledList>
      <Logo
        objectFit="cover"
        src="/assets/logo/newlogo.png"
        width={200}
        heigth={200}
        layout="fill"
        alt="lost items"
      />
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
  margin-bottom: 1em;
  width: 100%;
  margin-top: -0.7em;
`;

const StyledList = styled.ul`
  list-style-type: none;
  font-size: 0.9em;
`;

const NavListItem = styled.li`
  font-size: 0.9em;
`;

const Anchor = styled.a`
  text-decoration: none;
  font-size: 1em;
  color: white;
  cursor: pointer;
  transition: ease-out 0.6s;

  padding: 0.1em;

  &:hover {
    box-shadow: inset 8em 0 0 0 darkblue;
    border-radius: 0.4em;
  }
`;

const Logo = styled.img`
  border-radius: 1em;
  width: 6em;
  height: 6em;
  padding: 0.8em;
`;
