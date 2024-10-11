import { NavLink } from "react-router-dom";
import { NavHeader } from "./header";

export function Header() {
  return (
    <>
      <NavHeader>
        <NavLink to="/">Livros</NavLink>
        <NavLink to="/autores">Autores</NavLink>
      </NavHeader>
    </>
  );
}
