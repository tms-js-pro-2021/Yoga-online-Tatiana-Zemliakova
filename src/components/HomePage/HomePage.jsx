/* eslint-disable import/no-unresolved */
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import React from 'react';
import './HomePage.css';
import Slider from '../Slider/Slider';

export default function HomePage() {
  return (
    <>
      <Slider />
      <Container>
        <h1>Преподаватели</h1>
      </Container>
      <Container fluid className="background-gray">
        <Container>
          <Row>
            <Col sm={4}>
              <Card>
                <Card.Img variant="top" src="/images/teacher1.png" />
                <Card.Body>
                  <Card.Title>Инна Рыбчинская</Card.Title>
                  <Card.Text>Йога для начинающих</Card.Text>
                  <Button variant="outline-light">Записаться</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <Card.Img variant="top" src="/images/teacher2.png" />
                <Card.Body>
                  <Card.Title>Василина Солтан</Card.Title>
                  <Card.Text>
                    Сукшма Вьяяма - мощная, простая практика в традиции
                    Дхирендры Брахмачари.
                  </Card.Text>
                  <Button variant="outline-light">Записаться</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <Card.Img variant="top" src="/images/teacher3.png" />
                <Card.Body>
                  <Card.Title>Дарья Табольская</Card.Title>
                  <Card.Text>
                    Йогатерапия - для тех, кто имеет ограничения здоровья.
                  </Card.Text>
                  <Button variant="outline-light">Записаться</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container
        fluid
        style={{
          marginTop: '70px',
          backgroundImage: 'url(' + 'images/back2.png' + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ratione
          debitis quisquam temporibus maiores blanditiis hic sit, aspernatur
          fuga doloribus similique, vero ea adipisci, dolorem ipsam possimus
          magnam ipsa eum? Necessitatibus ut neque dolores atque, reprehenderit
          eligendi odio tempore natus? Consequatur corporis minus deserunt quod,
          eligendi in illum ipsam deleniti modi a facere ratione quibusdam?
          Alias aperiam dolor quo laboriosam. Odit non provident, numquam
          accusantium vitae voluptates incidunt quae. Corrupti placeat iste at
          ab consequuntur culpa. Magnam sunt, veritatis deleniti assumenda
          tempora iure similique nam sapiente! Porro incidunt sed accusamus.
          Quam officia accusantium, debitis eius quidem saepe hic quaerat
          eligendi. Culpa debitis totam facilis animi veniam eius voluptates
          sapiente neque quos natus, molestias ipsum ab, quas saepe illo dicta
          reprehenderit! Eligendi modi, soluta nemo dolorum hic recusandae
          provident, illum ut, quis non cumque. Doloremque consectetur vero
          similique quidem iure ipsa, dignissimos neque, quis nisi unde sequi
          amet molestias deserunt eius.
        </p>
      </Container>
    </>
  );
}
