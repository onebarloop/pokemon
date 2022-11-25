import { createGlobalStyle } from "styled-components";
import pokeHollow from "./assets/fonts/Pokemon_Hollow.ttf";
import pokeSolid from "./assets/fonts/Pokemon_Solid.ttf";
import pokeInGame from "./assets/fonts/Pokemon_InGame.ttf";

const GlobalStyles = createGlobalStyle`
:root {
    --color-blue: #0075be;
    --color-yellow: #ffcc00;
    --color-red: #fb1b1b;
    --color-grey: #dfdfdf;
    --color-green: #4dad5b;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  #root {
    display: grid;
    grid-template-rows: 4rem auto 3rem;
    height: 100vh;
  }
  
  main {
    overflow-y: scroll;
    background-color: var(--color-grey);
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  }
  

  
  @font-face {
    font-family: "pokeSolid";
    src: local("pokeSolid"), 
    url(${pokeSolid}) format("truetype");
  }

   @font-face {
    font-family: "pokeHollow";
    src: local("pokeHollow"), 
    url(${pokeHollow}) format("truetype");

  }
  @font-face {
    font-family: "pokeInGame";
    src: local("pokeInGame"), 
    url(${pokeInGame}) format("truetype");
    

  }
  
`;

export default GlobalStyles;
