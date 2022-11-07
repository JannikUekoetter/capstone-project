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
      <StyledHeadline>{detailItem2.name}</StyledHeadline>
      <br />
      <StyledImage
        objectFit="cover"
        src={detailItem2.img}
        width={200}
        heigth={200}
        layout="fill"
        alt="found items"
      />
      <StyledDivHeadline>Description</StyledDivHeadline>
      <StyledDescriptionText>{detailItem2.description}</StyledDescriptionText>
      <br />
      <StyledLocationHeadline>Location </StyledLocationHeadline>
      <StyledLocationText>{detailItem2.location}</StyledLocationText>
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
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    99.89deg,
    #ecedf0 9.59%,
    rgba(227, 229, 241, 0.78) 83.75%
  );
  margin: 3em;
  border-radius: 1em;
  padding: 2em;
`;

const StyledLocationText = styled.p`
  text-align: left;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    99.89deg,
    #ecedf0 9.59%,
    rgba(227, 229, 241, 0.78) 83.75%
  );
  margin: 3em;
  border-radius: 1em;
  padding: 2em;
`;

const StyledButton = styled.button`
  all: unset;
  width: 7em;
  height: 2em;
  position: relative;
  color: white;
  border-radius: 0.5em;
  transition: ease-out 0.9s;
  outline: none;
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

  &:hover {
    box-shadow: inset 8em 0 0 0 green;
  }
`;

const StyledHeadline = styled.button`
  all: unset;
  margin: 3em;
  width: 7em;
  height: 2em;
  position: relative;
  color: white;
  border-radius: 0.5em;
  transition: ease-out 0.9s;
  outline: none;
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
`;

export default ItemDetail2;
