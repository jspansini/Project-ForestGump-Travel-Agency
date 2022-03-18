import api from "../../api";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ModalEdit from "../components/ModalD";
import "./styles.css";
import { Accordion, Card, Button } from "react-bootstrap";
import Footer from "../components/Footer";

const Destino = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (destino) => {
    setShow(true);
    setDestinoUpdate(destino);
  };

  const [destino, setDestino] = useState([]);
  const [destinoUpdate, setDestinoUpdate] = useState();

  const nome = useRef();
  const foto = useRef();
  const preco = useRef();

  function enviar(event) {
    event.preventDefault();

    api
      .post("/destinos/", {
        nome: nome.current.value,
        foto: foto.current.value,
        preco: preco.current.value,
      })
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    api
      .get("/destinos")
      .then((res) => {
        setDestino(res.data);
      })
      .catch((erro) => console.log(erro));
  }, []);

  function deletar(btn) {
    api
      .delete(`/destinos/${btn.target.value}`)
      .then(() =>
        api
          .get("/destinos")
          .then((res) => setDestino(res.data))
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div class="cardscadastros">
        <div class="card-int">
          <form className="card-fix" onSubmit={enviar}>
            <label className="labels" for="Destino">
              Nome do destino:
            </label>
            <input
              required
              type="text"
              name="destinos"
              placeholder="Digite destino"
              ref={nome}
            />

            <label className="labels" for="Nome">
              Valor do Destino:
            </label>
            <input
              required
              type="text"
              name="destinos"
              placeholder="Valor Destino"
              ref={preco}
              step="000.03"
            />

            <label className="labels" for="tarifa">
              Imagem do Destino:
            </label>
            <input
              required
              type="text"
              name="tarifa"
              placeholder="Link da imagem"
              ref={foto}
            />
            <br></br>
            <input type="submit" class="btn" value="Cadastrar" />

          </form>
        </div>

        <div class="card-int">
          {destino.map((destino) => (
            <form
              className="card-fix"
              key={destino.id}
              onClick={() => handleShow(destino)}
            >
              <label className="labels" for="Destino: ">
                {destino.nome}
              </label>

              <label className="labels" for="Nome: ">
                R$: {destino.preco}
              </label>

              <div>
                <br></br>
                <img src={destino.foto} alt="..." class="img-thumbnail" />
                <button
                  type="button"
                  class="btn btn-link large material-icons"
                  value={destino.id}
                  onClick={(btn) => deletar(btn)}
                >
                  {" "}
                  delete{" "}
                </button>
              </div>
            </form>
          ))}

          {show ? (
            <ModalEdit
              show={show}
              handleClose={handleClose}
              destino={destinoUpdate}
            />
          ) : (
            <> </>
          )}
        </div>
      </div>
    </>
  );
};

export default Destino;
