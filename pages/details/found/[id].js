import { getItemByDatabaseIdv2 } from "../../../services/Db";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export function getServerSideProps(context) {
  return { props: { id: context.query.id } };
}

export function ItemDetail2({ id }) {
  const detailItem2 = getItemByDatabaseIdv2(id);
  if (!detailItem2) return <p> loading second badge of items </p>;

  return (
    <StyledDiv>
      <h1>{detailItem2.name}</h1>
      <StyledImage
        objectFit="cover"
        src={detailItem2.img}
        width={200}
        heigth={200}
        layout="fill"
        alt="found items"
      />
      <StyledDivHeadline>Description:</StyledDivHeadline>
      <StyledDescriptionText>{detailItem2.description}</StyledDescriptionText>
      <br />
      <StyledLocationHeadline>Location: </StyledLocationHeadline>
      <p>{detailItem2.location}</p>
      <Link href="/contact">
        <StyledButton> Make Contact</StyledButton>
      </Link>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledImage = styled.img`
  border-radius: 2em;
  width: 22em;
  height: 22em;
  position: relative;
`;

const StyledDivHeadline = styled.p`
  text-align: center;
  font-size: 1.3em;
`;

const StyledLocationHeadline = styled.p`
  text-align: center;
  font-size: 1.3em;
`;

const StyledDescriptionText = styled.p`
  text-align: left;
  padding-left: 6em;
  padding-right: 6em;
`;

const StyledButton = styled.button`
  position: relative;
  color: white;
  border-radius: 0.5em;
  background-image: linear-gradient(
    90deg,
    #0065ff,
    #6942ef,
    #6554c0,
    #008cff,
    #0065ff,
    #6942ef
  );
  background-size: 400%;
  background-position: 0% 0%;
  font-size: 2em;
  padding: 0.5em;
  outline: none;
`;

export default ItemDetail2;
