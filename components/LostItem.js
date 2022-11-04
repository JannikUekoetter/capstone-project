import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function LostItem({ img, id }) {
  return (
    <>
      <StyledList>
        <ImageContainer>
          <Link href={`/details/lost/${id}`}>
            <StyledImage
              objectFit="cover"
              src={img}
              width={200}
              heigth={200}
              layout="fill"
              alt="lost items"
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
  border-radius: 2em;
  width: 200px;
  height: 200px;
  position: relative;
`;

const StyledList = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: center;
`;
