import "bootstrap/dist/css/bootstrap.min.css";
import CardPizza from "./CardPizza";
import Header from "./Header";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <>
      <Header />
      <Container fluid className="mt-5">
        <Row className="g-4 justify-content-center">
            <Col xs={12} md={4} lg={4} xl={3}>
                <CardPizza imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c" titulo="Pizza Napolitana"precio="5950" ingredientes={["mozzarella", "tomates", "jamón", "orégano"]}/>
            </Col>
            <Col xs={12} md={4} lg={4} xl={3}>
                <CardPizza imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab" titulo="Pizza Española"precio="6950" ingredientes={["mozzarella", "gorgonzola", "parmesano", "provolone"]}/>
            </Col>
            <Col xs={12} md={4} lg={4} xl={3}>
                <CardPizza imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3" titulo="Pizza Pepperoni"precio="6950" ingredientes={["mozzarella", "pepperoni", "orégano"]}/>
            </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
