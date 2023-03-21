import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function DataJson({ movies }) {
  //props works fine
  console.log('searching', { movies });
  return (
    <Container>
      <Row>
        {/* Data files mapping to use  all attributes  */}
        {movies.map((movie) => (
          <Col className=" mt-5 " md={3} key={movie.title}>
            <Card>
              <Card.Img variant="top" src={movie.images['Poster Art'].url} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DataJson;
