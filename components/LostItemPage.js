import React from "react";
import Image from "next/image";

export default function LostItemPage({ name, description, img, id }) {
  return (
    <div>
      <p>
        This item is: {name}. Its description is: {description}. Its ID is: {id}
        . It looks like:
        <Image
          src={img}
          width={100}
          heigth={100}
          layout="fill"
          alt="lost items"
        />
      </p>
    </div>
  );
}
