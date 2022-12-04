import avatar from "../../assets/images/avatar.png";
import styled from "styled-components";
import useFetch from "../../lib/fetch";
import { nanoid } from "nanoid";

export default function ShoppingItem({ url, onBuyItem }) {
  const data = useFetch(url);

  const details = data
    ? {
        image: data.sprites.default,
        cost: data.cost,
        name: data.name,
        quantity: 1,
        id: nanoid(),
      }
    : { image: avatar, cost: "?", name: "" };

  return (
    <>
      <StyledShoppingItem>
        <StyledShoppingItemImage src={details.image} alt="ShoppingItemImage" />
        <StyledShoppingItemList>
          <li>{details.name}</li>
          <li>cost: {details.cost}¥</li>
        </StyledShoppingItemList>
        <StyledShoppingItemButton
          type="button"
          onClick={() => {
            onBuyItem(details);
          }}
        >
          Buy Item
        </StyledShoppingItemButton>
      </StyledShoppingItem>
    </>
  );
}

const StyledShoppingItem = styled.article`
  border: 1px black solid;
  width: 15rem;
  height: 17rem;
  background-color: var(--color-yellow);
  border: 10px solid var(--color-blue);
  text-align: center;
  align-content: center;
`;

const StyledShoppingItemImage = styled.img`
  width: 8rem;
  image-rendering: pixelated;
`;

const StyledShoppingItemList = styled.ul`
  list-style: none;
  font-family: pokeInGame;
  word-spacing: 10px;
  line-height: 1.5em;
`;

const StyledShoppingItemButton = styled.button`
  font-weight: bold;
  box-sizing: border-box;
  background: #92cd41;
  display: inline-block;
  position: relative;
  text-align: center;
  font-size: 10px;
  padding: 15px;
  font-family: "pokeInGame";
  text-decoration: none;
  box-shadow: inset -4px -4px 0px 0px #4aa52e;
  top: 15px;
`;
