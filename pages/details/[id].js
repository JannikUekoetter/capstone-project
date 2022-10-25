import { getItemByDatabaseId, lostItems } from "../../components/Db";

export function getServerSideProps(context) {
  console.log("test");
  return { props: { id: context.query.id } };
}

function ItemDetail({ id }) {
  const detailItem = getItemByDatabaseId(id);
  if (!detailItem) return <p> loading... </p>;

  return (
    <>
      <h1>
        Detail Page is working with dynamic IDs. This ID is: {detailItem.id}.
      </h1>
      <p>{detailItem.id}</p>
      <p>{detailItem.name}</p>
      <p>{detailItem.description}</p>
    </>
  );
}

export default ItemDetail;
