import ItemList from "../ItemList/ItemList";
import Cart from "../Cart/Cart";
import { useState } from "react";
//import avatar from "../../assets/images/avatar.png";

export default function Main() {
  const [shoppingCart, setShoppingCart] = useState([]);

  console.log(shoppingCart);

  function handleBuyItem(newItem) {
    setShoppingCart([newItem, ...shoppingCart]);
  }

  return (
    <main>
      <Cart shoppingCart={shoppingCart} />
      <ItemList onBuyItem={handleBuyItem} />
    </main>
  );
}
