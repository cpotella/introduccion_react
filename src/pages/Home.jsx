import { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardPizza from "../components/CardPizza";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const apiPizzas = async () => {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setPizzas(data);
    };
    apiPizzas();
  }, []);

  return (
    <Container fluid className="mt-5">
      <h2>Nuestras Pizzas</h2>
      <Row className="g-4 justify-content-center">
        {pizzas.map((pizza) => (
          <Col key={pizza.id} xs={12} md={4} lg={4} xl={3}>
            <CardPizza pizza={pizza} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
