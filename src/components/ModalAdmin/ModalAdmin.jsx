import React from 'react';
import { Modal } from 'react-bootstrap';
import AddForm from '../AddForm';

export default function ModalAdmin({
  handleDeleteEvent,
  handleAddEvent,
  el,
  ...props
}) {
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title
          style={{
            color: '#4D1919',
            fontWeight: 'bold',
          }}
        >
          Редактирование расписания
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddForm
          handleDeleteEvent={handleDeleteEvent}
          handleAddEvent={handleAddEvent}
          el={el}
        />
      </Modal.Body>
    </Modal>
  );
}
