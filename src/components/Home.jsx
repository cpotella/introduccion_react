import { Container, Row, Col } from "react-bootstrap";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas";

const Home = () => {
  return (
    <Container fluid className="mt-5">
      <h2>Nuestras Pizzas</h2>
      <Row className="g-4 justify-content-center">
        {pizzas.map((pizza) => (
          <Col key={pizza.id} xs={12} md={4} lg={4} xl={3}>
            <CardPizza pizza={pizza} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;