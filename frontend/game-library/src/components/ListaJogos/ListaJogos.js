import api from "../../services/api";
import React, { useEffect, useState } from 'react';
import CardJogos from '../CardJogos/CardJogos'
import { Container, Row, Col } from 'react-bootstrap';

function ListaDeJogos() {
    const [jogos, setJogos] = useState([]);
  
    useEffect(() => {
      api.get('/jogos')
        .then(response => setJogos(response.data))
        .catch(error => console.error(error));
    }, []);
  
    return (
        <Container className="pb-5">
        <Row>
          {jogos.map(jogo => (
            <Col key={jogo.id} sm={12} md={6} lg={4}>
              <CardJogos title={jogo.nome} text={jogo.descricao} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  
  export default ListaDeJogos;