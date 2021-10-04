import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ModalDelete(props) {
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title
          style={{
            color: '#4D1919',
            fontWeight: 'bold',
          }}
        >
          УДАЛИТЬ?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button
          variant="outline-dark"
          type="submit"
          style={{
            background: '#4D1919',
            color: '#FFFFFF',
          }}
        >
          Да, удалить это занятие
        </Button>
      </Modal.Body>
    </Modal>
  );
}
