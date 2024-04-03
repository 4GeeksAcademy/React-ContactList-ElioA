import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from "../store/appContext";


function DeleterModal() {
  const [show, setShow] = useState(false);
  const { store, actions } = useContext(Context);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn btn-outline-secondary contactButton" onClick={handleShow}>
      <i className="fas fa-trash"></i>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your are deleting your contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>are you sure you want to delete your contact?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{actions.deleteContact(store.contact.id)
            handleClose()}}>
            Delete contact
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleterModal;