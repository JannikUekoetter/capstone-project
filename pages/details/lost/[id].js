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
      <h1>{detailItem.name}</h1>
      <StyledImage
        objectFit="cover"
        src={detailItem.img}
        width={200}
        heigth={200}
        layout="fill"
        alt="lost items"
      />
      <StyledDescription>
        <p>
          Description: <br /> <br /> {detailItem.description}
        </p>
      </StyledDescription>

      <br />
      <p>Location: {detailItem.location}</p>
      <Link href="/contact">
        <button> Make Contact</button>
      </Link>
    </StyledDiv>
  );
}

const StyledImage = styled.img`
  border-radius: 2em;
  width: 22em;
  height: 22em;
  position: relative;
`;

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledDescription = styled.p`
  border: solid;
  border-color: grey;
  border-radius: 1em;
`;

const StyledHeadline = styled.h1`
  border-bottom: 1px solid red;
`;

export default ItemDetail;
