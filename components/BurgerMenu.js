import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function BurgerMenu() {
  return (
    <StyledDiv>
      <h1>
        <Image
          src="/assets/logo/image2.svg"
          width={60}
          height={45}
          alt="logo"
        ></Image>
      </h1>

      <FaAlignJustify />

      <nav>
        <StyledList>
          <li>
            <Link href="/searchlost">Search Lost</Link>
          </li>
          <li>
            <Link href="/addlost">Add Lost</Link>
          </li>
          <li>
            <Link href="/searchfound">Search Found</Link>
          </li>
          <li>
            <Link href="/addfound">Add Found</Link>
          </li>
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
`;

const StyledBurgerItems = styled.li`
  text-align: left;
`;
