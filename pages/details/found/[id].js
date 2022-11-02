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
      <p>
        Description: <br /> <br />
        {detailItem2.description}
      </p>
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

export default ItemDetail2;
