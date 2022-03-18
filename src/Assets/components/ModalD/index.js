import React, { useRef } from "react"
import {Modal, Button } from "react-bootstrap"
import api from '../../../api'





export default function ModalEdit (props) {


    const nome = useRef()
    const foto = useRef()
    const preco = useRef()

    function UpdateDestino(event){
        event.preventDefault()
        api.put("/destinos/update", {
            id: props.destino.id,
            nome:  nome.current.value,
            foto: foto.current.value,
            preco: preco.current.value
        }).then(() => window.location.reload()).catch((err) => console.log(err))

        

    }




    return(
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.destino.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body><form className="card-fix" onSubmit={UpdateDestino}>
                         <label className="labels" for="Destino">Nome do destino:</label>
                        <input required type="text" name="destinos" placeholder="Digite destino" ref={nome} defaultValue={props.destino.nome}/>

                        <label className="labels" for="Nome">Valor do Destino:</label>
                        <input required type="text" name="destinos" placeholder="Valor Destino" ref={preco} step="000.2" defaultValue={props.destino.preco}/>
        
                        <label className="labels" for="tarifa">Imagem do Destino:</label>
                        <input required type="text" name="tarifa" placeholder="Link da imagem" ref={foto} defaultValue={props.destino.foto}/>
                         <div>
                           <input type="submit" class="btn" value="ENVIAR" />
                         </div>
                        
             
             
                    </form>
                    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    )

}
    