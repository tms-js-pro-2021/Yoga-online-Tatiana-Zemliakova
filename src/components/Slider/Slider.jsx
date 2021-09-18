/* eslint-disable import/no-unresolved */
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="700px"
          src="images/rozoviegori.png"
          alt="gory"
        />
        <Carousel.Caption>
          <h2>Хатха йога с элементами Animal flow</h2>
          <p>
            Animal Gymnastics Yoga – современная методика развития телесного
            функционала
          </p>
          <Button>Подробнее</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="700px"
          src="images/rozoviegori.png"
          alt="gory"
        />
        <Carousel.Caption>
          <h2>Хатха йога с элементами Animal flow</h2>
          <p>
            Animal Gymnastics Yoga – современная методика развития телесного
            функционала
          </p>
          <Button>Подробнее</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="700px"
          src="images/rozoviegori.png"
          alt="gory"
        />
        <Carousel.Caption>
          <h2>Хатха йога с элементами Animal flow</h2>
          <p>
            Animal Gymnastics Yoga – современная методика развития телесного
            функционала
          </p>
          <Button>Подробнее</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
