import { useEffect, useState } from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";
import styled, { css } from "styled-components";

export default function ItemList({ onBuyItem }) {
  const [URL, setURL] = useState("https://pokeapi.co/api/v2/item/");
  const [items, setItems] = useState();

  function handleNextPage() {
    setURL(items.next);
  }

  function handlePreviousPage() {
    setURL(items.previous);
  }

  useEffect(() => {
    async function catchItem() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setItems(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    catchItem();
  }, [URL]);

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
