import { createBrowserRouter } from "react-router-dom";
import { Livros } from "../src/components/books/books.jsx";
import { Authors } from "./components/authors/authors.jsx";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Livros />,
  },
  {
    path: "/autores",
    element: <Authors />,
  },
]);
