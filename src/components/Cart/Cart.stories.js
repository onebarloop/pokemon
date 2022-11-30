import React from "react";
import Cart from "./Cart";

export default {
  title: "Cart",
  component: Cart,
};

//const Template = (args) => <Cart {...args} />;

export const CartPreviewList = () => <Cart shoppingCart={dummyArray} />;

const dummyArray = [
  {
    name: "Pokeball",
    cost: 100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png",
  },
  {
    name: "Pokeball",
    cost: 100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png",
  },
  {
    name: "Pokeball Pokeball Pokeball Pokeball Pokeball Pokeball",
    cost: 100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png",
  },
  {
    name: "Pokeball",
    cost: 100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png",
  },
  {
    name: "Pokeball",
    cost: 100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png",
  },
  {
    name: "Pokeball",
    cost: 100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png",
  },
  {
    name: "Pokeball",
    cost: 100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png",
  },
  {
    name: "Pokeball",
    cost: 100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png",
  },
];

/*const shoppingCart = {
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png",
  cost: 800,
  name: "ultra-ball",
};
*/
