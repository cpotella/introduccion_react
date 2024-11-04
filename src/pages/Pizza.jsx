import React, { useState, useEffect } from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const apiPizza = async () => {
      const response = await fetch(`http://localhost:5001/api/pizzas/${id}`); 
      const data = await response.json();
      setPizzas([data]); 
    };

    apiPizza();
  }, [id]);

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Conoce más de nuestras pizzas</h2>
      <Row>
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="mb-4">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
              <Card.Body>
                <Card.Title className="fw-bold text-capitalize">{pizza.name}</Card.Title>
                <Card.Text>{pizza.desc}<br />
                <strong>Ingredientes: 🍕</strong> {pizza.ingredients.join(", ")}</Card.Text>
                <Card.Text>Precio: ${pizza.price}</Card.Text>
                <Button variant="primary">Añadir al Carrito</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default Detail;
