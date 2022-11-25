import styled from "styled-components";

export default function Header() {
  return (
    <Headline>
      <h1>WeLCoMe To PoKé MaRT!</h1>
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
