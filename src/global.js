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
`;

export const Center = styled.div`
  width: 1560px;
  max-width: 90%;
  margin: 35px auto;
`;
