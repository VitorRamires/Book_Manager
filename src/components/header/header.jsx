import { NavLink } from "react-router-dom";
import { NavHeader, NavBox } from "./header";

export function Header() {
  return (
    <>
      <NavHeader>
        <h3>Gerenciador de livros</h3>

        <NavBox>
          <NavLink to="/">Livros</NavLink>
          <NavLink to="/autores">Autores</NavLink>
        </NavBox>
      </NavHeader>
    </>
  );
}
