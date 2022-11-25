import React from "react";
import ShoppingItem from "./ShoppingItem";

export default {
  title: "ShoppingItem",
  component: ShoppingItem,
};

const Template = (args) => <ShoppingItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  url: "https://pokeapi.co/api/v2/item/1/",
  onBuyItem: "Catch 'em all",
};

/*export const Primary = () => (
  <ShoppingItem
    url="https://pokeapi.co/api/v2/item/1/"
    onBuyItem={() => console.log("poke Hello")}
  />
);*/

//von export default
/*argTypes: {
    url: {"https://pokeapi.co/api/v2/item/1/"},
    onBuyItem: {() => console.log("poke Hello")},
  }*/
