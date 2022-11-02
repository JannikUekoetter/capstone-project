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
