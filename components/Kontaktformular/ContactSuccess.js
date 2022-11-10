import React from "react";
import styled from "styled-components";
import Image from "next/image";
import BurgerMenu from "../BurgerMenu";

export default function ContactSuccess() {
  return (
    <>
      <BurgerMenu />
      <StyledSuccess>
        <StyledImage
          objectFit="cover"
          src="/assets/successpage/success.jpg"
          width={400}
          heigth={400}
          layout="fill"
          alt="lost items"
        ></StyledImage>
        <SuccessText>You have made contact</SuccessText>
        <ThreeDots>...</ThreeDots>
        <SecondSuccessText>Now grab a coffee while you wait</SecondSuccessText>
      </StyledSuccess>
    </>
  );
}

const StyledSuccess = styled.h1`
  text-align: center;
`;

const StyledImage = styled.img`
  border-radius: 1em;
  width: 7em;
  height: 7em;
  position: relative;
`;

const SuccessText = styled.p`
  color: white;
  border-radius: 0.5em;
  height: 2em;
  text-align: center;
  background-size: 400%;
  background-position: 0% 0%;
  position: relative;
  font-size: 0.8em;

  color: #555fd6;
`;

const SecondSuccessText = styled.p`
  all: unset;
  width: 3em;
  height: 1.5em;
  font-size: 0.5em;
  color: white;
  border-radius: 0.5em;
  outline: none;
  color: #555fd6;
  background-size: 400%;
  background-position: 0% 0%;
  padding: 0.5em;
  text-align: center;
`;

const ThreeDots = styled.p`
  color: #555fd6;
  text-align: center;
`;
