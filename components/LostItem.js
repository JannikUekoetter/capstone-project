import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function LostItem({ name, description, img, id }) {
  return (
    <li>
      This item is: {name}. Its description is: {description}. Its ID is: {id}.
      It looks like:
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
  );
}

const ImageContainer = styled.div`
  text-align: center;
  width: 200px;
  height: 200px;
  position: relative;
`;
