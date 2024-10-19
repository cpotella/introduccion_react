import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validarInput = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setError("");

    setEmail("");
    setPassword("");

    alert("¡Has iniciado sesión exitosamente!");
  };

  return (
    <Container className="mt-5 py-2">
      <h2>Login</h2>
      <Form onSubmit={validarInput}>
        {error && <p className="text-danger">{error}</p>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su dirección de correo"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
