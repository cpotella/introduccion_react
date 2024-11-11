import React, { useContext } from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import { API_CONFIG } from "../config";


const Cart = () => {
  const { cart, addToCart, removeFromCart, calculateTotal } = useContext(CartContext);
  const { token } = useContext(UserContext);

  const handleCheckout = async () => {
    if (!token) {
      alert("Debes iniciar sesión para realizar el pago");
      return;
    }

    try {
      const response = await fetch(`http://${API_CONFIG.ip}:${API_CONFIG.port}/api/checkouts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          cart,
          total: calculateTotal(), 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("¡Compra realizada con éxito!");
      } else {
        alert(`Error en la compra: ${data.message}`);
      }
    } catch (error) {
      console.error('Error al realizar el pago:', error);
      alert("Hubo un error al procesar el pago.");
    }
  };

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
                  <Button variant="primary" onClick={() => addToCart(pizza)}>+</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
      <h3 className="mt-4">Total: {calculateTotal()}</h3>
      <Button variant="dark" onClick={handleCheckout} disabled={!token}>
        {token ? "Pagar" : "Inicia sesión para pagar"}
      </Button>
    </Container>
  );
}

export default Cart;
