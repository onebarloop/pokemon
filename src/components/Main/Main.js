import ItemList from "../ItemList/ItemList";
import Cart from "../Cart/Cart";
//import avatar from "../../assets/images/avatar.png";

export default function Main({ shoppingCart, onBuyItem, isShowingCart }) {
  return (
    <main>
      {isShowingCart && <Cart shoppingCart={shoppingCart} />}
      <ItemList onBuyItem={onBuyItem} />
    </main>
  );
}
