import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import api from '../../services/api';
import CardJogos from '../CardJogos/CardJogos';

function ListaDeJogos() {
  const [jogos, setJogos] = useState([]);
  const [novoJogo, setNovoJogo] = useState({ nome: '', descricao: '' });

  useEffect(() => {
    api.get('/jogos')
      .then(response => setJogos(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    api.delete(`/jogos/${id}`)
      .then(response => {
        setJogos(prevJogos => prevJogos.filter(jogo => jogo.id !== id));
      })
      .catch(error => console.error(error));
  };

  const handleAddJogo = () => {
    api.post('/jogos', novoJogo)
      .then(response => {
        setJogos(prevJogos => [...prevJogos, response.data]);
        setNovoJogo({ nome: '', descricao: '' });
      })
      .catch(error => console.error(error));
  };

  const handleChange = (e) => {
    setNovoJogo({ ...novoJogo, [e.target.name]: e.target.value });
  };

  const handleUpdateJogo = (id, updatedData) => {
    api.put(`/jogos/${id}`, updatedData)
      .then(response => {
        setJogos(prevJogos =>
          prevJogos.map(jogo =>
            jogo.id === id ? { ...jogo, ...updatedData } : jogo
          )
        );
      })
      .catch(error => console.error(error));
  };


  return (
    <Container className="pb-5">
      <Row className="mb-3">
        <Col>
          <input
            type="text"
            name="nome"
            placeholder="Nome do Jogo"
            value={novoJogo.nome}
            onChange={handleChange}
            autocomplete="off"
          />
          <input
            type="text"
            name="descricao"
            placeholder="Descrição do Jogo"
            value={novoJogo.descricao}
            onChange={handleChange}
            autocomplete="off"
          />
          <Button variant="success" onClick={handleAddJogo}>
            Adicionar Jogo
          </Button>
        </Col>
      </Row>
      <Row>
        {jogos.map(jogo => (
          <Col key={jogo.id} sm={12} md={6} lg={4}>
            <CardJogos
              id={jogo.id}
              title={jogo.nome}
              text={jogo.descricao}
              onDelete={handleDelete}
              onUpdate={handleUpdateJogo}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListaDeJogos;
