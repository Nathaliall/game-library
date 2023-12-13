// ListaDePlataformas.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import api from '../../services/api';
import CardPlataformas from '../CardPlataformas/CardPlataformas';

function ListaDePlataformas() {
  const [plataformas, setPlataformas] = useState([]);
  const [novaPlataforma, setNovaPlataforma] = useState({ nome: '' });

  useEffect(() => {
    api.get('/plataformas')
      .then(response => setPlataformas(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    api.delete(`/plataformas/${id}`)
      .then(response => {
        setPlataformas(prevPlataformas => prevPlataformas.filter(plataforma => plataforma.id !== id));
      })
      .catch(error => console.error(error));
  };

  const handleAddPlataforma = () => {
    api.post('/plataformas', novaPlataforma)
      .then(response => {
        setPlataformas(prevPlataformas => [...prevPlataformas, response.data]);
        setNovaPlataforma({ nome: '' });
      })
      .catch(error => console.error(error));
  };

  const handleChange = (e) => {
    setNovaPlataforma({ ...novaPlataforma, [e.target.name]: e.target.value });
  };

  const handleUpdatePlataforma = (id, updatedData) => {
    api.put(`/plataformas/${id}`, updatedData)
      .then(response => {
        setPlataformas(prevPlataformas =>
          prevPlataformas.map(plataforma =>
            plataforma.id === id ? { ...plataforma, ...updatedData } : plataforma
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
            placeholder="Nome da Plataforma"
            value={novaPlataforma.nome}
            onChange={handleChange}
            autoComplete="off"
          />
          <Button variant="success" onClick={handleAddPlataforma}>
            Adicionar Plataforma
          </Button>
        </Col>
      </Row>
      <Row>
        {plataformas.map(plataforma => (
          <Col key={plataforma.id} sm={12} md={6} lg={4}>
            <CardPlataformas
              id={plataforma.id}
              nome={plataforma.nome}
              onDelete={handleDelete}
              onUpdate={handleUpdatePlataforma}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListaDePlataformas;
