import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import jogosImg from '../../images/jogos.PNG';
import PropTypes from 'prop-types';

function CardJogos({ id, title, text, onDelete }) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <Card style={{ width: '18rem' }} className="bg-dark mt-5">
      <Card.Img variant="top" src={jogosImg} />
      <Card.Body>
        <Card.Title className="text-light">{title}</Card.Title>
        <Card.Text className="text-light">{text}</Card.Text>
        <Button variant="danger" onClick={handleDelete}>
          Excluir
        </Button>
      </Card.Body>
    </Card>
  );
}

CardJogos.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CardJogos;