import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [isShowingCart, setIsShowingCart] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);

  function handleShowCart() {
    setIsShowingCart(!isShowingCart);
  }

  function handleBuyItem(newItem) {
    setShoppingCart([newItem, ...shoppingCart]);
  }

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
        // TODO: Remove Item from Cart if Quantity is 0

        // if (item.id === id && item.quantity === 1) {
        //   setShoppingCart(shoppingCart.filter((item) => item.id !== id));
        // }
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  }

  return (
    <>
      <Header onShowCart={handleShowCart} shoppingCart={shoppingCart} />
      <Main
        isShowingCart={isShowingCart}
        onBuyItem={handleBuyItem}
        shoppingCart={shoppingCart}
        onAddItem={handleAddItem}
        onRemoveItem={handleRemoveItem}
      />
      <Footer />
    </>
  );
}

export default App;
