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

  return (
    <>
      <Header onShowCart={handleShowCart} shoppingCart={shoppingCart} />
      <Main
        isShowingCart={isShowingCart}
        onBuyItem={handleBuyItem}
        shoppingCart={shoppingCart}
      />
      <Footer />
    </>
  );
}

export default App;
