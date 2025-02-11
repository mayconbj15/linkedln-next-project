import ShoppingCartListPage from "./ShoppingCartList";

export default async function CartPage() {
  const response = await fetch("http://localhost:3000/api/users/1/cart", {
    cache: "no-cache",
  });
  const carProducts = await response.json();

  return (
    <ShoppingCartListPage
      initialCartProducts={carProducts}
    ></ShoppingCartListPage>
  );
}
