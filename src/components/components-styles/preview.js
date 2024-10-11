import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const DialogOverlay = styled(Dialog.Overlay)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.479);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ModalBox = styled(Dialog.Content)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  max-width: 100%;
  background-color: #ffff;
  padding: 20px;
  border-radius: 5px;
  max-height: 90%;
  overflow-y: auto;
`;

export const DialogTrigger = styled(Dialog.Trigger)`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background-color: transparent;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: rgb(224, 229, 247);
  }
`;

export const ItemModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
  width: 100%;
  margin: 25px 0;

  input {
    width: 90%;
    padding: 10px 5px;
    border: 1px solid #cecece;
    border-radius: 5px;
  }

  p {
    font-size: 0.95rem;
  }
`;

export const DialogTitle = styled(Dialog.Title)`
  margin-bottom: 25px;
`;

export const ViewInfo = styled.div`
  padding: 5px 25px 25px 25px;
  background-color: rgb(245, 245, 245);
  margin: 10px 0;
  border-radius: 5px;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;
  width: 100%;

  button {
    width: 100px;
    padding: 10px 5px;
    cursor: pointer;
    background-color: rgb(228, 228, 228);
    transition: 0.2s;
    border: none;
    border-radius: 5px;
    color: #000000;
    font-weight: bold;

    &:hover {
      background-color: rgb(215, 215, 215);
    }
  }
`;
