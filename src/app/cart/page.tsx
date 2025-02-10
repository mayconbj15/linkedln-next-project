"use client";

import { useState } from "react";
import { products } from "@/data/product-data";
import Link from "next/link";

export default function CartPage() {
  const [cardIds, setCartIds] = useState(["123", "345"]);
  const cartProducts = cardIds.map((id) => products.find((p) => p.id == id)!);

  return (
    <>
      <h1>Cart page</h1>
      {cartProducts.map((product) => (
        <Link key={product.id} href={"/products/" + product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </Link>
      ))}
    </>
  );
}
