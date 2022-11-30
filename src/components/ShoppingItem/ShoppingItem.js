import avatar from "../../assets/images/avatar.png";
import styled from "styled-components";
import useFetch from "../../lib/fetch";

export default function ShoppingItem({ url, onBuyItem }) {
  const data = useFetch(url);

  const details = data
    ? {
        image: data.sprites.default,
        cost: data.cost,
        name: data.name,
      }
    : { image: avatar, cost: "?", name: "" };

  // setDetails({
  //   image: data.sprites.default,
  //   cost: data.cost,
  //   name: data.name,
  // });

  //console.log(data);

  //setDetails({ image: data.sprites.default, cost: data.cost, name: data.name });

  // useEffect(() => {
  //   async function fetchItem() {
  //
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setDetails({
  //         image: data.sprites.default,
  //         cost: data.cost,
  //         name: data.name,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchItem();
  // }, [url]);

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
