import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const DialogOverlay = styled(Dialog.Overlay)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.479);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 99;
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
  width: 150px;
  font-size: 1.2rem;
  padding: 7px 4px;
  background-color: rgb(12, 34, 107);
  color: #ffff;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 20px 0 50px 0;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: rgb(23, 60, 184);
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
  margin: 20px 0;

  input {
    width: 90%;
    padding: 10px 5px;
    border: 1px solid #cecece;
    outline: none;
    border-radius: 5px;
    margin-top: 5px;

    &:focus {
      border-color: rgb(23, 60, 184) !important;
    }
  }
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;

  button {
    width: 100px;
    padding: 10px 5px;
    cursor: pointer;
    background-color: rgb(47, 83, 202);
    outline: none;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-weight: bold;
    transition: 0.2s;

    &:hover {
      background-color: rgb(42, 91, 250);
    }

    &:last-child {
      background-color: rgb(206, 59, 59);
      transition: 0.2s;

      &:hover {
        background-color: rgb(255, 55, 55);
      }
    }
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const TableBox = styled.table`
  width: 950px;
  border-collapse: collapse;

  table,
  th,
  td {
    border: 1px solid;
    text-align: start;
    padding: 5px;
  }

  thead tr {
    background-color: rgb(211, 211, 211);
    font-size: 1.2rem;
  }

  tr {
    width: 100%;
  }

  td {
    padding: 15px;
    position: relative;
  }

  td:not(thead td) {
    border-top: none;
    border-left: none;
  }
  tbody tr td:first-child {
    border-left: 1px solid rgb(33 33 33);
  }
`;

export const Actions = styled.td`
  display: flex;
  align-items: stretch;
  justify-content: start;
  gap: 10px;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const SelectAuthors = styled.select`
  width: 90%;
  padding: 10px;
  outline: none;
  border: 1px solid #cecece;
  border-radius: 5px;
  margin-top: 5px;

  &:focus {
    border-color: rgb(23, 60, 184) !important;
  }
`;

export const AlreadyCreated = styled.p`
  margin-top: 20px;
  font-size: 0.95rem;
  color: #ff5858;
`;
