import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import jogosImg from '../../images/jogos.PNG';
import PropTypes from 'prop-types';

function CardJogos({ id, title, text, onDelete, onUpdate }) {
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
      descricao: e.target.descricao.value,
    };
    onUpdate(id, updatedData);
    setShowModal(false);
  };

  return (
    <>
      <Card style={{ width: '18rem' }} className="bg-dark mt-5">
        <Card.Img variant="top" src={jogosImg} />
        <Card.Body>
          <Card.Title className="text-light">{title}</Card.Title>
          <Card.Text className="text-light">{text}</Card.Text>
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
          <Modal.Title>Atualizar Jogo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateSubmit}>
            <Form.Group controlId="formNome">
              <Form.Label>Nome do Jogo</Form.Label>
              <Form.Control type="text" name="nome" defaultValue={title} />
            </Form.Group>
            <Form.Group controlId="formDescricao">
              <Form.Label>Descrição do Jogo</Form.Label>
              <Form.Control
                type="text"
                name="descricao"
                defaultValue={text}
              />
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

CardJogos.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CardJogos;
