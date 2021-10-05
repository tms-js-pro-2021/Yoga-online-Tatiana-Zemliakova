import React from 'react';
import { Modal } from 'react-bootstrap';

export default function ModalAnswer(props) {
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title
          style={{
            color: '#4D1919',
            fontWeight: 'bold',
          }}
        >
          НАМАСТЕ
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Спасибо за выбор.
          <br />
          Встретимся на занятиях
        </p>
      </Modal.Body>
    </Modal>
  );
}
