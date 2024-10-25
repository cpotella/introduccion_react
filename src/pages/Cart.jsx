import React, { useContext } from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';


const Cart = () => {
  const { cart, addToCart, removeFromCart, calculateTotal } = useContext(CartContext);


  return (
    <Container className="mt-5">
      <h2 className="mb-4">Carrito de Compras</h2>
      <Row>
        {cart.map((pizza) => (
          <div key={pizza.id} className="mb-4">
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>Precio: ${pizza.price}</Card.Text>
                <Card.Text>Cantidad: {pizza.cantidad}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Button variant="danger" onClick={() => removeFromCart(pizza.id)}>-</Button>
                  <Button variant="primary" onClick={() =>  addToCart(pizza)}>+</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
      <h3 className="mt-4">Total: {calculateTotal()}</h3>
      <Button variant="dark">Pagar</Button>
    </Container>
  
  );
}

export default Cart;
