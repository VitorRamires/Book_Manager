import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Livros } from "./components/books/books.jsx";
import { Header } from "./components/header/header.jsx";
import { Authors } from "./components/authors/authors.jsx";
import { GlobalCss } from "./global.js";
import { ContextGlobal } from "./context/globalContext.jsx";
import { ContextAuthors } from "./context/globalContextAuthors.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <Header />
          <Livros />
        </>
      ),
    },
    {
      path: "/autores",
      element: (
        <>
          <Header />
          <Authors />
        </>
      ),
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

export function App() {
  return (
    <ContextAuthors>
      <ContextGlobal>
        <RouterProvider router={router} />
        <GlobalCss />
      </ContextGlobal>
    </ContextAuthors>
  );
}
