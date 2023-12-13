import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import eldenring from "../../images/eldenring.jpg"
import tails from "../../images/tails.jpg"
import minecraft from "../../images/minecraft.jpg"
import Card from 'react-bootstrap/Card';

const imageStyle = {
  objectFit: 'cover', 
  objectPosition: 'top', 
  maxHeight: '353px',
  width: '100%', 
};

const WelcomeContentContainer = ()=>{
  

    return (
      <Container className="mt-5">
      <Row >
      <Col className="d-flex align-items-center justify-content-center">
      <Card style={{ width: '100%', height: '100%'}}>
      <Card.Body className="text-center">
        <Card.Title className="mt-5">Sobre</Card.Title>
        <Card.Text>
        O games hub é web app open source para a organização de jogos de multiplas bibliotecas e plataformas. Este é um projeto universitário, pedimos desculpas por alguma falha no sistema.
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
      <Col style={{
          maxHeight: '400px',
        }}>
      <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={eldenring}
          alt="Primeira imagem"
          style={imageStyle}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tails}
          alt="Segunda imagem"
          style={imageStyle}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={minecraft}
          alt="Primeira imagem"
          style={imageStyle}
        />
      </Carousel.Item>
    </Carousel>
      </Col>
      </Row>
    </Container>
    )
}

export default WelcomeContentContainer