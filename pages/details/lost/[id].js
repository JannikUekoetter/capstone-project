import { getItemByDatabaseId } from "../../../services/Db";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export function getServerSideProps(context) {
  return { props: { id: context.query.id } };
}

export function ItemDetail({ id }) {
  const detailItem = getItemByDatabaseId(id);
  if (!detailItem) return <p> loading... </p>;

  return (
    <StyledDiv>
      <StyledHeadline>{detailItem.name}</StyledHeadline>
      <br />
      <StyledImage
        objectFit="cover"
        src={detailItem.img}
        width={200}
        heigth={200}
        layout="fill"
        alt="lost items"
      />
      <br />
      <br />
      <br />
      <DescriptionHeadline>Description</DescriptionHeadline>
      <StyledDescriptionText>
        <br />
        <br /> {detailItem.description}
      </StyledDescriptionText>
      <StyledLocationHeadline>Location</StyledLocationHeadline>

      <StyledLocationText>{detailItem.location}</StyledLocationText>
      <br />
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

const DescriptionHeadline = styled.p`
  all: unset;
  margin: 3em;
  gap: 2em;
  width: 4em;
  height: 1.5em;
  color: white;
  border-radius: 0.5em;
  transition: ease-out 0.9s;
  outline: none;
  background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
  background-size: 400%;
  background-position: 0% 0%;
  font-size: 2em;
  padding: 0.5em;
`;

const StyledLocationHeadline = styled.p`
  all: unset;
  margin: 3em;
  gap: 2em;
  width: 4em;
  height: 1.5em;
  color: white;
  border-radius: 0.5em;
  transition: ease-out 0.9s;
  outline: none;
  background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
  background-size: 400%;
  background-position: 0% 0%;
  font-size: 2em;
  padding: 0.5em;
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
  background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
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
  font-size: 14rem;
  margin: 3em;
  width: 7em;
  height: 2em;
  position: relative;
  color: white;
  border-radius: 0.5em;
  transition: ease-out 0.9s;
  outline: none;
  background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
  background-size: 400%;
  background-position: 0% 0%;
  font-size: 2em;
  padding: 0.5em;
`;

export default ItemDetail;
