import { Container, Button } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { email, logout } = useContext(UserContext);

  return (
    <Container className="mt-5 py-2">
      <h3>{email || "Usuario no autenticado"}</h3>
      <Button variant="primary" type="button" className="mt-3" onClick={logout}>
        Cerrar sesión
      </Button>
    </Container>
  );
}

export default Profile;
