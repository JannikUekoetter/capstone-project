import {
  getItemByDatabaseId,
  getItemByDatabaseIdv2,
} from "../../components/Db";

export function getServerSideProps(context) {
  return { props: { id: context.query.id } };
}

export function ItemDetail({ id }) {
  const detailItem = getItemByDatabaseId(id);
  if (!detailItem) return <p> loading... </p>;

  return (
    <>
      <h1>
        Detail Page is working with dynamic IDs. This ID is: {detailItem.id}.
      </h1>
      <p>Name: {detailItem.name}</p>
      <p>Description: {detailItem.description}</p>
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

export default ItemDetail;
