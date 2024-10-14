import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";

const CardPizza = ({ pizza }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
      <Card.Body>
        <Card.Title className="fw-bold text-capitalize">{pizza.name}</Card.Title>
        <Card.Text>
          <strong>Precio:</strong> ${pizza.price} <br />
          {/* <strong>Disponibilidad:</strong> {pizza.disponibilidad} <br /> */}
          <strong>Ingredientes: 🍕</strong> {pizza.ingredients.join(", ")}
        </Card.Text>
        <Button variant="primary"> Añadir al carrito</Button>
        {/* <Button variant="primary" disabled={pizza.stock === 0}>
          {pizza.stock > 0 ? "Añadir al carrito" : "Agotado"}
        </Button> */}
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
