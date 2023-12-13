// CardPlataformas.js
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

function CardPlataformas({ id, nome, onDelete, onUpdate }) {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleUpdate = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      nome: e.target.nome.value,
    };
    onUpdate(id, updatedData);
    setShowModal(false);
  };
  

  return (
    <>
      <Card style={{ width: '18rem' }} className="bg-dark mt-5">
        <Card.Body>
          <Card.Title className="text-light">{nome}</Card.Title>
          <Button variant="danger" onClick={handleDelete}>
            Excluir
          </Button>
          <Button variant="info" onClick={handleUpdate} className="ml-2">
            Atualizar
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Atualizar Plataforma</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateSubmit}>
            <Form.Group controlId="formNome">
              <Form.Label>Nome da Plataforma</Form.Label>
              <Form.Control type="text" name="nome" defaultValue={nome} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Atualizar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

CardPlataformas.propTypes = {
  id: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CardPlataformas;
