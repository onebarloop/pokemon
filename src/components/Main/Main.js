import ItemList from "../ItemList/ItemList";
import Cart from "../Cart/Cart";
import { useState } from "react";
//import avatar from "../../assets/images/avatar.png";

export default function Main() {
  const [shoppingCart, setShoppingCart] = useState([]);

  function handleAddItem(id) {
    setShoppingCart(
      shoppingCart.map((item) => {
        if (item.id === id) return { ...item, quantity: item.quantity + 1 };
        return item;
      })
    );
  }

  function handleRemoveItem(id) {
    setShoppingCart(
      shoppingCart.map((item) => {
        if (item.id === id) return { ...item, quantity: item.quantity - 1 };
        return item;
      })
    );
  }

  console.table(shoppingCart);

  function handleBuyItem(newItem) {
    setShoppingCart([newItem, ...shoppingCart]);
  }

  return (
    <main>
      <Cart
        shoppingCart={shoppingCart}
        onAddItem={handleAddItem}
        onRemoveItem={handleRemoveItem}
      />
      <ItemList onBuyItem={handleBuyItem} />
    </main>
  );
}
