import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card, CardGroup } from "react-bootstrap";

import banner1 from "../img/banner1.png";
import banner2 from "../img/banner2.png";
import banner3 from "../img/banner3.png";

import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={banner1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={banner2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={banner3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="cards.descriptions">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>FINLÂNDIA</Card.Title>
              <Card.Text>
                Império Das Passagens: viaje mais pagando menos!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Atualizado a 3 minutos!</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>QUEBÉC</Card.Title>
              <Card.Text>
                Império Das Passagens: viaje mais pagando menos!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Atualizado a 2 minutos!</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>SÃO PAULO</Card.Title>
              <Card.Text>
                Império Das Passagens: viaje mais pagando menos!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Atualizado a 3 minutos!</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default Home;
