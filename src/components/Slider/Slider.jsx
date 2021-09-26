/* eslint-disable import/no-unresolved */
import React from 'react';
import { Carousel, Button, Card } from 'react-bootstrap';

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="448px"
          src="images/gory.jpg"
          alt="gory"
        />
        <Carousel.Caption>
          <h2>Хатха йога</h2>
          <p>
            Хатха-Йога — это учение о гармонии, основной инструмент
            практикующего хатха-йогу – это тело как источник развития.
          </p>
          <Button variant="outline-light">
            <Card.Link
              href="/about"
              style={{ color: '#FFFFFF', textDecoration: 'none' }}
            >
              Подробнее
            </Card.Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="448px"
          src="images/zima.jpg"
          alt="gory"
        />
        <Carousel.Caption>
          <h2>Аштанга йога</h2>
          <p>
            Аштанга йога направлена на укрепление тела, развитие гибкости,
            физической и ментальной устойчивости.
          </p>
          <Button variant="outline-light">
            <Card.Link
              href="/about"
              style={{ color: '#FFFFFF', textDecoration: 'none' }}
            >
              Подробнее
            </Card.Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="448px"
          src="images/gory2.jpg"
          alt="gory"
        />
        <Carousel.Caption>
          <h2>Хатха йога с элементами Animal flow</h2>
          <p>
            Animal Gymnastics Yoga – включает в себя традиционные боевые
            искусства и элементы, имитирующие движения животных.
          </p>
          <Button variant="outline-light">
            <Card.Link
              href="/about"
              style={{ color: '#FFFFFF', textDecoration: 'none' }}
            >
              Подробнее
            </Card.Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
