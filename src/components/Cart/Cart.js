import styled, { css } from "styled-components";
import pokeBackground from "../../assets/images/background.jpg";

export default function Cart({ shoppingCart, onAddItem, onRemoveItem }) {
  return (
    <>
      <StyledCart>
        <StyledList>
          {shoppingCart?.map((item) => (
            <StyledCartItem key={item.name}>
              <StyledCartItemImage src={item.image} alt="pokeimage" />
              <StyledCartItemName>
                {item.name} x {item.quantity}
              </StyledCartItemName>
              <span>¥ {item.cost * item.quantity}</span>

              <span>
                <StyledCartButton
                  type="button"
                  onClick={() => onAddItem(item.id)}
                >
                  +
                </StyledCartButton>
                <StyledCartButton
                  type="button"
                  prev
                  onClick={() => onRemoveItem(item.id)}
                >
                  -
                </StyledCartButton>
              </span>
            </StyledCartItem>
          ))}
        </StyledList>
        <StyledCartSummary>
          <p style={{ gridArea: "a" }}>Items: </p>
          <p style={{ gridArea: "b" }}>
            {shoppingCart.length === 0
              ? 0
              : shoppingCart
                  .map((item) => item.quantity)
                  .reduce((a, b) => a + b)}
          </p>
          <p style={{ gridArea: "c" }}>total:</p>
          <p style={{ gridArea: "d" }}>
            ¥
            {shoppingCart.length === 0
              ? 0
              : shoppingCart
                  .map((item) => item.cost * item.quantity)
                  .reduce((a, b) => a + b)}
          </p>
          <StyledCartBuyButton style={{ gridArea: "e" }} type="button">
            Buy Now
          </StyledCartBuyButton>
        </StyledCartSummary>
      </StyledCart>
    </>
  );
}

const StyledCart = styled.section`
  position: absolute;
  background-image: url(${pokeBackground});
  background-size: cover;
  padding: 1rem;
  z-index: 1;
  border: 10px solid var(--color-yellow);
`;

const StyledList = styled.ul`
  padding: 0;
`;

const StyledCartItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  border: 1px black solid;
  width: 30rem;
  height: 4rem;
  background-color: var(--color-yellow);
  border: 10px solid var(--color-blue);
  text-align: center;
  align-content: center;
  list-style: none;
  font-family: pokeInGame;
`;

const StyledCartItemImage = styled.img`
  width: 3rem;
  image-rendering: pixelated;
`;

const StyledCartItemName = styled.span`
  overflow: hidden;
  height: 1.5rem;
  width: 40%;
  text-align: left;
`;

const StyledCartButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  text-align: center;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  font-family: "pokeInGame";
  text-decoration: none;
  color: white;
  background: var(--color-green);
  box-shadow: inset -4px -4px 0px 0px #367d40;

  ${({ prev }) =>
    prev &&
    css`
      background: var(--color-red);
      box-shadow: inset -4px -4px 0px 0px #a60a0a;
    `}
`;

const StyledCartSummary = styled.section`
  display: grid;
  grid-template-areas:
    "a b e"
    "c d e";

  width: 30rem;
  height: auto;
  background-color: var(--color-red);
  border: 10px solid var(--color-yellow);
  text-align: center;
  font-family: pokeInGame;
  font-size: 1rem;
  line-height: 1.1rem;
  padding: 0;
`;

const StyledCartBuyButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  text-align: center;
  margin: 0.5rem;
  xwidth: 2rem;
  xheight: 2rem;
  font-size: 1.2rem;
  font-family: "pokeInGame";
  text-decoration: none;
  color: white;
  background: var(--color-green);
  box-shadow: inset -4px -4px 0px 0px #367d40;
`;
