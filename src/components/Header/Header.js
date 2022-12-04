import styled from "styled-components";
import pokeballCart from "../../assets/images/pokeballCart.png";

export default function Header({ onShowCart, shoppingCart }) {
  return (
    <Headline>
      <h1>WeLCoMe To PoKé MaRT!</h1>

      <StyledPokeBall
        src={pokeballCart}
        alt="pokeballIcon"
        onClick={onShowCart}
      />
      <StyledCounter>{shoppingCart.length}</StyledCounter>
    </Headline>
  );
}

//jss

const Headline = styled.header`
  font-family: "pokeSolid";
  color: var(--color-yellow);
  background-color: var(--color-red);
  -webkit-text-stroke: 1px var(--color-blue);
  letter-spacing: 0.22rem;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 3rem;
  }
`;

const StyledPokeBall = styled.img`
  width: 30px;
  margin-left: 1rem;
`;

const StyledCounter = styled.span`
  position: relative;
  -webkit-text-stroke: 1px white;
  color: black;
  font-family: pokeInGame;
  left: -0.5rem;
  top: 0.5rem;
  font-size: 0.8rem;
  letter-spacing: 1px;
`;
