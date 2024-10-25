import { Container, Button, Nav, Navbar } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function NavInicio() {
    const {calculateTotal} = useContext(CartContext);
    const total = calculateTotal();
    const token = true; 

    return (
        <Navbar expand="lg" fixed="top" collapseOnSelect className="bg-body-tertiary w-100" data-bs-theme="dark">
        <Container fluid>
            <Navbar.Brand as={Link} to="/">Pizzería Mamma Mía</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="Nav-border">🍕 Home</Nav.Link>
                {token ? (
                <>
                    <Nav.Link as={Link} to="/profile" className="Nav-border">🔓Profile</Nav.Link>
                    <Nav.Link href="#logout" className="Nav-border">🔒Logout</Nav.Link>
                </>
                ) : (
                <>
                    <Nav.Link as={Link} to="/login" className="Nav-border">🔐 Login</Nav.Link>
                    <Nav.Link as={Link} to="/register" className="Nav-border">🔐 Register</Nav.Link>
                </>
                )}
            </Nav>
            <Button as={Link} to="/cart" variant="outline-light" className="ms-auto">
                🛒 Total: {total}
            </Button>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
    }

    export default NavInicio;
