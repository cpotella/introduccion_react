import { Container, Button } from "react-bootstrap";

function Profile() {
  return (
    <Container className="mt-5 py-2">
      <h3>cpotella@gmail.com</h3>
      <Button variant="primary" type="submit" className="mt-3">
        Cerrar sesión
      </Button>
    </Container>
  );
}

export default Profile;
