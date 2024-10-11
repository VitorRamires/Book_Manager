import styled from "styled-components";

export const NavHeader = styled.nav`
  width: 100%;
  background-color: rgb(19, 55, 173);
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 1.5rem;
  padding: 15px 25px;

  a {
    width: 100px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffff;
    vertical-align: middle;
    text-decoration: none;
    height: 100%;
    transition: 0.1s;
    padding: 10px;
    border-radius: 5px;
  }

  a.active {
    background-color: #ffff;
    color: rgb(19, 55, 173);
  }
`;
