import { createGlobalStyle, styled } from "styled-components";

export const GlobalCss = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding:0;
    margin:0;
    font-family: sans-serif;
  }

  img{
    width: 100%;
    height: 100%;
  }

  body{
    height: 100vh;
    background-color: #0B1B1F;
  }
`;

export const Center = styled.div`
  width: 1560px;
  max-width: 90%;
  margin: 75px auto;
  background-color: #0D2025;
  padding:25px;
  border-radius: 10px;
`;
