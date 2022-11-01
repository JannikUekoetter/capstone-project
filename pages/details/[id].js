import { getItemByDatabaseId, getItemByDatabaseIdv2 } from "../../services/Db";
import Image from "next/image";
import styled from "styled-components";

export function getServerSideProps(context) {
  return { props: { id: context.query.id } };
}

export function ItemDetail({ id }) {
  const detailItem = getItemByDatabaseId(id);
  if (!detailItem) return <p> loading... </p>;

  return (
    <>
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
      <button> Make Contact</button>
    </>
  );
}

/* Hier entsteht der Versuch auch das zweite Array aus Items darzustellen. Also ID 13-26. */

export function ItemDetail2({ id }) {
  const detailItem2 = getItemByDatabaseIdv2(id);
  if (!detailItem2) return <p> loading...2223232 </p>;

  return (
    <>
      <h1>
        Detail Page is working with dynamic IDs. This ID is: {detailItem2.id}.
      </h1>
      <p>Name: {detailItem2.name}</p>
      <p>Description: {detailItem2.description}</p>
    </>
  );
}

const StyledImage = styled.img`
  border-radius: 2em;
  width: 200px;
  height: 200px;
  position: relative;
`;

export default ItemDetail;
