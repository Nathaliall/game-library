import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import jogosImg from '../../images/jogos.PNG'

function CardJogos({ title, text }) {
    return (
      <Card style={{ width: '18rem' }}  className="bg-dark mt-5">
        <Card.Img variant="top" src={jogosImg} />
        <Card.Body>
          <Card.Title className="text-light">{title}</Card.Title>
          <Card.Text className="text-light">{text}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

export default CardJogos;