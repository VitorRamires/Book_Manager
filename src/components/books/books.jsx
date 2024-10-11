import {
  DialogOverlay,
  ModalBox,
  ItemModal,
  ModalActions,
  Actions,
  DialogTrigger,
  TableBox,
  SelectAuthors,
  TableWrapper,
} from "../components-styles/tables.js";
import * as Dialog from "@radix-ui/react-dialog";
import { Center } from "../../global.js";
import { Editar } from "./features/edit.jsx";
import { Preview } from "./features/view.jsx";
import { Remove } from "./features/remove.jsx";
import { CreateGlobalContext } from "../../context/globalContext.jsx";
import { useContext } from "react";
import { CreateGlobalAuthors } from "../../context/globalContextAuthors.jsx";

export function Livros() {
  const { books, formMethods, createBookHandle } =
    useContext(CreateGlobalContext);

  const { authors } = useContext(CreateGlobalAuthors);

  const { handleSubmit, register } = formMethods;

  return (
    <Center>
      <h1>Livros</h1>

      <Dialog.Root>
        <DialogTrigger>Criar Livro</DialogTrigger>
        <DialogOverlay>
          <ModalBox>
            <Dialog.Title>Crie seu livro</Dialog.Title>
            <Dialog.Description></Dialog.Description>
            <form onSubmit={handleSubmit(createBookHandle)}>
              <ItemModal>
                <label htmlFor="bookName">Nome do livro</label>
                <input
                  id="bookName"
                  {...register("bookName", { required: true })}
                  placeholder="Digite o nome do livro"
                />
              </ItemModal>
              <ItemModal>
                <label htmlFor="pages">Páginas</label>
                <input
                  id="pages"
                  type="number"
                  {...register("pages")}
                  placeholder="Digite a quantidade de páginas"
                />
              </ItemModal>

              <ItemModal>
                <label htmlFor="authors">Autor</label>

                <SelectAuthors
                  name="authors"
                  id="authors"
                  {...register("author", { required: true })}
                  defaultValue={"selecione o autor"}
                >
                  <option value="Escolha o autor">Escolha o autor</option>
                  {authors.map((author) => {
                    return (
                      <option key={author.authorId} value={author.authorId}>
                        {author.author}
                      </option>
                    );
                  })}
                </SelectAuthors>
              </ItemModal>
              <ModalActions>
                <button>Criar</button>
                <Dialog.Close asChild>
                  <button>Cancelar</button>
                </Dialog.Close>
              </ModalActions>
            </form>
          </ModalBox>
        </DialogOverlay>
      </Dialog.Root>

      <TableWrapper>
        {books.length !== 0 ? (
          <TableBox>
            <thead>
              <tr>
                <td>Id</td>
                <td>Livro</td>
                <td>Autor</td>
                <td>Páginas</td>
                <td>Ações</td>
              </tr>
            </thead>

            <tbody>
              {books.map((book) => {
                return (
                  <tr key={book.id}>
                    <td>
                      <p>{book.id}</p>
                    </td>
                    <td>
                      <p>{book.name}</p>
                    </td>
                    <td>
                      <p>
                        {
                          authors.find((item) => item.authorId == book.authorId)
                            ?.author
                        }
                      </p>
                    </td>
                    <td>
                      <p>{book.pages}</p>
                    </td>
                    <Actions>
                      <Editar bookId={book.id} book={book} />
                      <Preview bookIdPreview={book.id} />
                      <Remove bookIdRemove={book.id} />
                    </Actions>
                  </tr>
                );
              })}
            </tbody>
          </TableBox>
        ) : (
          <>
            <h1>Nenhum livro foi encontrado</h1>
          </>
        )}
      </TableWrapper>
    </Center>
  );
}
