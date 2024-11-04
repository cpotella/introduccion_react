import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";
import { Link } from "react-router-dom";

const CardPizza = ({ pizza, addToCart }) => {
  return (
    <Card style={{ width: "18rem" }} >
      <Link to={`/pizza/${pizza.id}`}>
        <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
      </Link>
      <Card.Body>
        <Card.Title className="fw-bold text-capitalize">{pizza.name}</Card.Title>
        <Card.Text>
          <strong>Precio:</strong> ${pizza.price} <br />
          {/* <strong>Disponibilidad:</strong> {pizza.disponibilidad} <br /> */}
          <strong>Ingredientes: 🍕</strong> {pizza.ingredients.join(", ")}
        </Card.Text>
        <Button variant="primary" onClick={() => addToCart(pizza)}> Añadir al carrito</Button>
        {/* <Button variant="primary" disabled={pizza.stock === 0}>
          {pizza.stock > 0 ? "Añadir al carrito" : "Agotado"}
        </Button> */}
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
