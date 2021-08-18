import React from "react";
import { useSelector } from "react-redux";

import Header from "../Header/Header";
import VacationDays from "../VacationDays/VacationDays";
import NewRequest from "../NewRequest/NewRequest";

import VacationsCardList from "../VacationsCardList/VacationsCardList";
import Modal from "../Modal/Modal";
import ModalRequestMessage from '../ModalRequestMessage/ModalRequestMessage';
import ModalLookRequest from '../ModalLookRequest/ModalLookRequest';
import ModalChangeRequest from '../ModalChangeRequest/ModalChangeRequest';

import "./VacationPage.scss";

const VacationPage = () => {
  const modalType = useSelector(({modalReduser}) => modalReduser.modalType);

  return (
    <div className="main">
      <Header />
      <div className="mainWrapper">
        <div className="asideWraper">
          <VacationDays />
          <NewRequest />
        </div>
        <VacationsCardList />
        <Modal>
          {(modalType === 'submit' || modalType === 'submit-changes') && <ModalRequestMessage />}
          {modalType === 'look' && <ModalLookRequest />}
          {modalType === 'change' && <ModalChangeRequest />}
        </Modal>
      </div>
    </div>
  );
};

export default VacationPage;
