import React, { useState } from 'react';
import { Form, Modal, Button, FloatingLabel } from 'react-bootstrap';

export default function ModalClient() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title
          style={{
            color: '#4D1919',
            fontWeight: 'bold',
          }}
        >
          Введите ваши данные
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="validationCustom">
            <Form.Label>Напишите Ваше имя</Form.Label>
            <Form.Control type="text" placeholder="Ваше имя" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Напишите Ваш e-mail</Form.Label>
            <Form.Control type="email" placeholder="Ваш e-mail" />
            <Form.Text className="text-muted">
              Мы не передадим ваши данные никому другому.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Предупредите меня за 2 часа" />
          </Form.Group>
          <FloatingLabel>
            <Button
              variant="outline-dark"
              type="submit"
              style={{
                background: '#4D1919',
                color: '#FFFFFF',
              }}
            >
              Записаться на занятие
            </Button>
          </FloatingLabel>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
