import React, { useState } from 'react';
import {
  Form,
  Modal,
  Button,
  FloatingLabel,
  Toast,
  Container,
  ToastContainer,
} from 'react-bootstrap';

export default function ModalClient(props) {
  const [showToast, setShowToast] = useState(true);
  const toggleShowToast = () => setShowToast(!showToast);

  return (
    <Container>
      <Modal {...props}>
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
                onClick={toggleShowToast}
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
      <ToastContainer position="middle-center" style={{ height: '16rem' }}>
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={5000}
          autohide
        >
          <Toast.Header
            style={{
              background: 'rgba(77, 25, 25, 0.9)',
              color: '#FFFFFF',
            }}
          >
            <strong>НАМАСТЕ!</strong>
          </Toast.Header>
          <Toast.Body
            style={{
              textAlign: 'center',
            }}
          >
            Благодарим вас за запись.
            <br />
            Встретимся на занятиях.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
}
