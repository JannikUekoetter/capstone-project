import { useRouter } from "next/router";

function ItemDetail() {
  const router = useRouter();
  const itemdetailsId = router.query.id;
  return (
    <h1>
      Detail Page is working with dynamic IDs. This ID is: {itemdetailsId}.
    </h1>
  );
}

export default ItemDetail;
