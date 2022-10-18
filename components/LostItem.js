import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function LostItem({ name, description, img, id }) {
  return (
    <div>
      <li>
        This item is: {name}. Its description is: {description}. Its ID is: {id}
        . It looks like:
        <ImageContainer>
          <Image
            objectFit="cover"
            src={img}
            width={200}
            heigth={200}
            layout="fill"
            alt="lost items"
          />
        </ImageContainer>
      </li>
    </div>
  );
}

const ImageContainer = styled.div`
  text-align: center;
  width: 200px;
  height: 200px;
  position: relative;
`;
