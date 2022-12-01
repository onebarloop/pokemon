import ShoppingItem from "../ShoppingItem/ShoppingItem";
import styled, { css } from "styled-components";

import useItems from "../../lib/items";

export default function ItemList({ onBuyItem }) {
  const { handleNextPage, handlePreviousPage, items } = useItems(
    "https://pokeapi.co/api/v2/item/"
  );
  //NEU

  return (
    <>
      <StyledItemList>
        {items?.results.map((item) => (
          <ShoppingItem key={item.name} url={item.url} onBuyItem={onBuyItem} />
        ))}
      </StyledItemList>
      <StyledPageButton type="button" onClick={handlePreviousPage} prev>
        previous
      </StyledPageButton>
      <StyledPageButton type="button" onClick={handleNextPage}>
        next
      </StyledPageButton>
    </>
  );
}

const StyledItemList = styled.section`
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-items: center;
`;

const StyledPageButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  text-align: center;
  font-size: 30px;
  padding: 20px;
  font-family: "pokeInGame";
  text-decoration: none;
  color: white;
  background: var(--color-yellow);
  box-shadow: inset -4px -4px 0px 0px #e59400;
  width: 50%;
  ${({ prev }) =>
    prev &&
    css`
      background: var(--color-red);
      box-shadow: inset -4px -4px 0px 0px #a60a0a;
    `}
`;
