import ItemList from "../ItemList/ItemList";
import Cart from "../Cart/Cart";
//import avatar from "../../assets/images/avatar.png";

export default function Main({
  shoppingCart,
  onBuyItem,
  onAddItem,
  onRemoveItem,
  isShowingCart,
}) {
  console.table(shoppingCart);

  return (
    <main>
      {isShowingCart && (
        <Cart
          shoppingCart={shoppingCart}
          onAddItem={onAddItem}
          onRemoveItem={onRemoveItem}
        />
      )}
      <ItemList onBuyItem={onBuyItem} />
    </main>
  );
}
