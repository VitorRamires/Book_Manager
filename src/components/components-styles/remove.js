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
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.2s;

  &:hover {
    background-color: rgb(255, 210, 210);
  }
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;
  margin-top: 35px;

  button {
    width: 100px;
    padding: 10px 5px;
    cursor: pointer;
    background-color: rgb(206, 59, 59);
    outline: none;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-weight: bold;
    transition: 0.2s;

    &:hover {
      background-color: rgb(255, 55, 55);
    }

    &:disabled {
      background-color: rgb(235, 235, 235);
      color: rgb(196, 196, 196);
      cursor: not-allowed;
    }

    &:last-child {
      background-color: rgb(228, 228, 228);
      color: #000000;
      transition: 0.2s;

      &:hover {
        background-color: rgb(215, 215, 215);
      }
    }
  }
`;

export const Span = styled.span`
  font-size: 1.2rem;
  color: #ff5858;
`;
