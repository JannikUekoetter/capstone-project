import { getItemByDatabaseId, getItemByDatabaseIdv2 } from "../../services/Db";
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
      <h1>Name: {detailItem.name}</h1>
      <p>Description: {detailItem.description}</p>
      <StyledImage
        objectFit="cover"
        src={detailItem.img}
        width={200}
        heigth={200}
        layout="fill"
        alt="lost items"
      />
      <br />
      <p>Location: {detailItem.location}</p>
      <Link href="/contact">
        <button> Make Contact</button>
      </Link>
    </StyledDiv>
  );
}

/* Hier entsteht der Versuch auch das zweite Array aus Items darzustellen. Also ID 13-26. */

export function ItemDetail2({ id }) {
  const detailItem2 = getItemByDatabaseIdv2(id);
  if (!detailItem2) return <p> loading...23232323 </p>;

  return (
    <StyledDiv>
      <h1>Name: {detailItem2.name}</h1>
      <p>Description: {detailItem2.description}</p>
      <StyledImage
        objectFit="cover"
        src={detailItem2.img}
        width={200}
        heigth={200}
        layout="fill"
        alt="lost items"
      />
      <br />
      <p>Location: {detailItem2.location}</p>
      <Link href="/contact">
        <button> Make Contact</button>
      </Link>
    </StyledDiv>
  );
}

const StyledImage = styled.img`
  border-radius: 2em;
  width: 200px;
  height: 200px;
  position: relative;
`;

const StyledDiv = styled.div`
  text-align: center;
`;

export default ItemDetail;
