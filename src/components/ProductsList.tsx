"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductsList({
  products,
  initialCartProducts,
}: {
  products: Product[];
  initialCartProducts: Product[];
}) {
  const [cartProducts, setCartProducts] = useState(initialCartProducts);

  async function addtoCart(productId: string) {
    const response = await fetch("http://localhost:3000/api/users/1/cart", {
      method: "POST",
      body: JSON.stringify({
        productId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const updatedCartProduct = await response.json();
    setCartProducts(updatedCartProduct);
  }

  async function removeFromCart(productId: string) {
    const response = await fetch("http://localhost:3000/api/users/1/cart", {
      method: "DELETE",
      body: JSON.stringify({
        productId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const updatedCartProduct = await response.json();
    setCartProducts(updatedCartProduct);
  }

  function productIsInCart(productId: string) {
    console.log("cartProducts", cartProducts);
    return cartProducts.some((cp) => cp.id === productId);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
        >
          <div className="flex justify-center mb-4 h-48 relative">
            {" "}
            {/* Added height and relative positioning */}
            <Image
              src={"/" + product.imageUrl}
              alt="Product image"
              fill // Fill the container
              className="object-cover rounded-md" // Cover the container, maintaining aspect ratio
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
          {productIsInCart(product.id) ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                removeFromCart(product.id);
              }}
            >
              Remove from cart
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                addtoCart(product.id);
              }}
            >
              Add to cart
            </button>
          )}
        </Link>
      ))}
    </div>
  );
}
