import { Container, Button, Nav, Navbar } from "react-bootstrap";
import "../App.css";

function NavInicio() {
    const total = 25000;
    const token = true; 

    return (
        <Navbar expand="lg" fixed="top" collapseOnSelect className="bg-body-tertiary w-100" data-bs-theme="dark">
        <Container fluid>
            <Navbar.Brand href="#home">Pizzería Mamma Mía</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className="Nav-border">🍕 Home</Nav.Link>
                {token ? (
                <>
                    <Nav.Link href="#profile" className="Nav-border">🔓Profile</Nav.Link>
                    <Nav.Link href="#logout" className="Nav-border">🔒Logout</Nav.Link>
                </>
                ) : (
                <>
                    <Nav.Link href="#login" className="Nav-border">🔐 Login</Nav.Link>
                    <Nav.Link href="#register" className="Nav-border">🔐 Register</Nav.Link>
                </>
                )}
            </Nav>
            <Button variant="outline-light" className="ms-auto">
                🛒 Total: ${total.toLocaleString()}
            </Button>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
    }

    export default NavInicio;
