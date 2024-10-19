import React, { useState } from 'react';
import { pizzas } from '../pizzas';
import { Container, Row, Card, Button } from 'react-bootstrap';

function Cart() {
  const [cart, setCart] = useState(
    pizzas.map((pizza) => ({ ...pizza, cantidad: 1 }))
  );

  const aumentarCantidad = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id ? { ...pizza, cantidad: pizza.cantidad + 1 } : pizza
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, cantidad: pizza.cantidad - 1 } : pizza
        )
        .filter((pizza) => pizza.cantidad > 0)
    );
  };

  const calcularTotal = () => {
    let total = 0;
    cart.forEach(pizza => {
      total += pizza.precio * pizza.cantidad;
    });
    return total;
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Carrito de Compras</h2>
      <Row>
        {cart.map((pizza) => (
          <div key={pizza.id} className="mb-4">
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src={pizza.imagen} alt={pizza.nombre} />
              <Card.Body>
                <Card.Title>{pizza.nombre}</Card.Title>
                <Card.Text>Precio: ${pizza.precio}</Card.Text>
                <Card.Text>Cantidad: {pizza.cantidad}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Button variant="danger" onClick={() => disminuirCantidad(pizza.id)}>-</Button>
                  <Button variant="primary" onClick={() => aumentarCantidad(pizza.id)}>+</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
      <h3 className="mt-4">Total: ${calcularTotal().toLocaleString()}</h3>
      <Button variant="dark">Pagar</Button>
    </Container>
  
  );
}

export default Cart;
