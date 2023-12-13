import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import api from '../../services/api';
import CardJogos from '../CardJogos/CardJogos';

function ListaDeJogos() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    api.get('/jogos')
      .then(response => setJogos(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    // Faça uma chamada API para excluir o jogo com o ID fornecido
    api.delete(`/jogos/${id}`)
      .then(response => {
        // Atualize o estado para refletir a exclusão
        setJogos(prevJogos => prevJogos.filter(jogo => jogo.id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <Container className="pb-5">
      <Row>
        {jogos.map(jogo => (
          <Col key={jogo.id} sm={12} md={6} lg={4}>
            {/* Passe a função handleDelete e o ID do jogo como propriedades */}
            <CardJogos
              id={jogo.id}
              title={jogo.nome}
              text={jogo.descricao}
              onDelete={handleDelete}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListaDeJogos;
