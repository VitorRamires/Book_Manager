import { Link } from "react-router-dom";
import { NavHeader, NavBox, Menu } from "./header";

export function Header() {
  return (
    <>
      <NavHeader>
        <Menu>
          <h3>Gerenciador de livros</h3>
          <NavBox>
            <Link to="/">Livros</Link>
            <Link to="/autores">Autores</Link>
          </NavBox>
        </Menu>
      </NavHeader>
    </>
  );
}
