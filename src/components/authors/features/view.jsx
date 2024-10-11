/* eslint-disable react/prop-types */
import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  ModalBox,
  ItemModal,
  ModalActions,
  DialogTrigger,
  DialogTitle,
  ViewInfo,
} from "../../components-styles/preview";
import previewLogo from "../../../img/preview.svg";
import { useState } from "react";

export function Preview({ authorIdPreview }) {
  const [getIdPreview, setGetIdPreview] = useState(authorIdPreview);
  const captureOnLocalStorage = JSON.parse(localStorage.getItem("authors"));
  let filterIdAuthorPreview = captureOnLocalStorage.filter(
    (item) => item.authorId === getIdPreview
  )[0];

  function getIdAuthorPreviewHandle() {
    setGetIdPreview(authorIdPreview);
  }

  return (
    <Dialog.Root>
      <DialogTrigger>
        <img
          src={previewLogo}
          alt=""
          title="Preview"
          onClick={getIdAuthorPreviewHandle}
        />
      </DialogTrigger>

      <Dialog.Portal>
        <DialogOverlay>
          <ModalBox>
            <DialogTitle>Visualizando</DialogTitle>
            <Dialog.Description></Dialog.Description>

            <ViewInfo>
              <ItemModal>
                <h3>Nome do autor</h3>
                <p>{filterIdAuthorPreview.author}</p>
              </ItemModal>
              <ItemModal>
                <h3>Email</h3>
                <p>{filterIdAuthorPreview.email}</p>
              </ItemModal>
            </ViewInfo>
            <ModalActions>
              <Dialog.Close asChild>
                <button>Fechar</button>
              </Dialog.Close>
            </ModalActions>
          </ModalBox>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
