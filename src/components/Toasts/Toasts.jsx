import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

export default function Toasts(props) {
  return (
    <ToastContainer className="p-3" position="middle-center">
      <Toast
        {...props}
        style={{
          background: 'rgba(77, 25, 25, 0.9)',
          color: '#FFFFFF',
        }}
      >
        <Toast.Header>
          <strong className="me-auto">НАМАСТЕ!</strong>
        </Toast.Header>
        <Toast.Body>
          Благодарим вас за запись.
          <br />
          Встретимся на занятиях.
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
