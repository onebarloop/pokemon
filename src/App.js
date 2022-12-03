import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [isShowingCart, setIsShowingCart] = useState(false);
  function handleShowCart() {
    setIsShowingCart(!isShowingCart);
  }
  return (
    <>
      <Header onShowCart={handleShowCart} />
      <Main isShowingCart={isShowingCart} />
      <Footer />
    </>
  );
}

export default App;

//button im header eingefügt
//cart rechts aligned (styledCart)
// removed console log in main.js
// add conditinal rendering for Cart in Main.js
// add useState and handleShowCart function in App.ja
