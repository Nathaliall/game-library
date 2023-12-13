import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import eldenring from "../../images/eldenring.jpg"
import tails from "../../images/tails.jpg"
import Card from 'react-bootstrap/Card';

const imageStyle = {
  objectFit: 'cover', // Redimensiona a imagem para cobrir completamente o contêiner
  objectPosition: 'top', // Exibe a parte superior da imagem no modo de cobertura
  maxHeight: '353px', // Altura máxima desejada para todas as imagens
  width: '100%', // Garante que a imagem ocupe 100% da largura do contêiner
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
          maxHeight: '400px', // Defina a altura máxima desejada
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
    </Carousel>
      </Col>
      </Row>
    </Container>
    )
}

export default WelcomeContentContainer