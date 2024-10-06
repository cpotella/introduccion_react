import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";

const CardPizza = ({ pizza }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pizza.imagen} alt={pizza.nombre} />
      <Card.Body>
        <Card.Title>{pizza.nombre}</Card.Title>
        <Card.Text>
          <strong>Precio:</strong> ${pizza.precio} <br />
          <strong>Disponibilidad:</strong> {pizza.disponibilidad} <br />
          <strong>Ingredientes: 🍕</strong> {pizza.ingredientes.join(", ")}
        </Card.Text>
        <Button variant="primary" disabled={pizza.stock === 0}>
          {pizza.stock > 0 ? "Añadir al carrito" : "Agotado"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
