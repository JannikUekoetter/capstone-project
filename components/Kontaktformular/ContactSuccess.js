import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function ContactSuccess() {
  return (
    <StyledSuccess>
      <StyledImage
        objectFit="cover"
        src="/assets/successpage/success.jpg"
        width={400}
        heigth={400}
        layout="fill"
        alt="lost items"
      ></StyledImage>
      <p>You have made contact. </p>
      <br />
      <p>Now get a coffee while you wait.</p>
    </StyledSuccess>
  );
}

const StyledSuccess = styled.h1`
  text-align: center;
`;

const StyledImage = styled.img`
  border-radius: 2em;
  width: 500px;
  height: 400px;
  position: relative;
`;
