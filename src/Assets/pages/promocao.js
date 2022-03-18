import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Placeholder from "react-bootstrap/Placeholder";
import { Accordion, Card, Button } from "react-bootstrap";

import img1 from "../img/banner-vertical (1).jpg";
import img2 from "../img/banner-vertical (2).jpg";
import img3 from "../img/banner-vertical (3).jpg";
import img4 from "../img/banner-vertical (4).jpg";

const Promocao = () => {
  return (
    <>
      <br></br>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Valeime</Card.Title>
            <Card.Text>
              Um texto chamativo para você comprar passagem aerea!
            </Card.Text>
            <Button variant="danger">COMPRAR</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Title>Valeime</Card.Title>
            <Card.Text>
              Um texto chamativo para você comprar passagem aerea!
            </Card.Text>
            <Button variant="danger">COMPRAR</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Title>Valeime</Card.Title>
            <Card.Text>
              Um texto chamativo para você comprar passagem aerea!
            </Card.Text>
            <Button variant="danger">COMPRAR</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img4} />
          <Card.Body>
            <Card.Title>Valeime</Card.Title>
            <Card.Text>
              Um texto chamativo para você comprar passagem aerea!
            </Card.Text>
            <Button variant="danger">COMPRAR</Button>
          </Card.Body>
        </Card>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Regulamento das promoções</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Política de devoluçao das passagens
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Promocao;
