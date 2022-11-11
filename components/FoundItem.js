import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import NavigationBar from "../components/NagivationBar";

export default function FoundItem({ img, id }) {
  return (
    <>
      <StyledList>
        <ImageContainer>
          <Link href={`/details/found/${id}`}>
            <StyledImage
              objectFit="cover"
              src={img}
              width={200}
              heigth={200}
              layout="fill"
              alt="found items"
            />
          </Link>
        </ImageContainer>
      </StyledList>
    </>
  );
}

const ImageContainer = styled.li`
  text-align: center;
`;

const StyledImage = styled.img`
  border-radius: 3em;
  width: 12em;
  height: 12em;
  padding: 0.8em;
`;

const StyledList = styled.li`
  list-style-type: none;
`;
