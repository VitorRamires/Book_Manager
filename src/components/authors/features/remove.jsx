/* eslint-disable react/prop-types */
import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  ModalBox,
  ModalActions,
  DialogTrigger,
  Span,
} from "../../components-styles/remove";
import removeLogo from "../../../img/trash.svg";
import { CreateGlobalAuthors } from "../../../context/globalContextAuthors";
import { useContext, useState } from "react";

export function Remove({ authorIdRemove }) {
  const [getAuthorIdRemove] = useState(authorIdRemove);

  const { setAuthors } = useContext(CreateGlobalAuthors);
  const [existedAuthor, setExistedAuthor] = useState();

  const getBooks = JSON.parse(localStorage.getItem("books"));
  const arraySavedOnLocal = JSON.parse(localStorage.getItem("authors"));

  let actualItem = arraySavedOnLocal.filter(
    (item) => item.authorId === getAuthorIdRemove
  )[0];

  let removeArray = arraySavedOnLocal.filter(
    (item) => item.authorId != actualItem.authorId
  );

  function verification() {
    getBooks.find((item) => item.authorId == actualItem.authorId)
      ? setExistedAuthor(true)
      : setExistedAuthor(false);
  }

  function filterArray() {
    if (!existedAuthor) {
      setAuthors(removeArray);
      localStorage.setItem("authors", JSON.stringify(removeArray));
    }
  }

  return (
    <>
      <Dialog.Root>
        <DialogTrigger>
          <img src={removeLogo} alt="" title="Remover" onClick={verification} />
        </DialogTrigger>
        <Dialog.Portal>
          <DialogOverlay>
            <ModalBox>
              <Dialog.Title>
                {existedAuthor ? (
                  <Span>Delete o livro referente ao autor</Span>
                ) : (
                  <Span>Deseja remover o autor?</Span>
                )}
              </Dialog.Title>
              <Dialog.Description></Dialog.Description>
              <ModalActions>
                <Dialog.Close asChild>
                  <button disabled={existedAuthor} onClick={filterArray}>
                    Sim
                  </button>
                </Dialog.Close>
                <Dialog.Close asChild>
                  {existedAuthor ? <button>Sair</button> : <button>Não</button>}
                </Dialog.Close>
              </ModalActions>
            </ModalBox>
          </DialogOverlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
