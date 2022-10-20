import { useRouter } from "next/router";
import Link from "next/link";

function ItemDetail() {
  const router = useRouter();
  const itemdetailsId = router.query.id;
  return (
    <h1>
      Detail Page is working with dynamic ID. This ID is: {itemdetailsId}.
    </h1>
  );
}

export default ItemDetail;
