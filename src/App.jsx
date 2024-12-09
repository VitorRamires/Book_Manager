import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Livros } from "./components/books/books.jsx";
import { Header } from "./components/header/header.jsx";
import { Authors } from "./components/authors/authors.jsx";
import { GlobalCss } from "./global.js";
import { ContextGlobal } from "./context/globalContext.jsx";
import { ContextAuthors } from "./context/globalContextAuthors.jsx";

export function App() {
  return (
    <ContextAuthors>
      <ContextGlobal>
        <BrowserRouter
          future={{
            v7_relativeSplatPath: true,
          }}
        >
          <Header />
          <Routes>
            <Route path="/">
              <Route path="/" element={<Livros />} />
            </Route>

            <Route path="/autores">
              <Route path="/autores" element={<Authors />} />
            </Route>
          </Routes>
          <GlobalCss />
        </BrowserRouter>
      </ContextGlobal>
    </ContextAuthors>
  );
}
