import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function FoundItem({ name, description, img, id }) {
  return (
    <>
      <li>
        <ImageContainer>
          <Link href={`/details/${id}`}>
            <Image
              objectFit="cover"
              src={img}
              width={200}
              heigth={200}
              layout="fill"
              alt="lost items"
            />
          </Link>
        </ImageContainer>
      </li>
    </>
  );
}

const ImageContainer = styled.li`
  text-align: center;
  width: 200px;
  height: 200px;
  position: relative;
`;
