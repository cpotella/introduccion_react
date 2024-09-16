import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";

function CardPizza({ imagen, titulo, ingredientes, precio }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <hr />
          <Card.Text>
            <strong>Ingredientes:</strong> 🍕{ingredientes.join(", ")}
          </Card.Text>
          <hr />
          <Card.Text>Precio: {precio}</Card.Text>
          <div className='buttons-card'>
            <Button variant="outline-dark">Ver Más 👀</Button>
            <Button variant="dark">Añadir 🛒</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardPizza;
