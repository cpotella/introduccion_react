import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Form } from "react-bootstrap";
import "../App.css";
import React, { useState } from "react";

function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validarInput = (e) => {
    e.preventDefault();

    if (email === "" || password === "" || confirmPassword === "") {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
        setError("La contraseña debe tener al menos 6 caracteres");
        return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas deben coincidir");
      return;
    }

    setError(""); 

    setEmail("");
    setPassword("");
    setConfirmPassword("");

    alert("¡Registro exitoso!");
  };

  return (
    <Container className="mt-5 py-2">
      <h2>Registro</h2>
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
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirme Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirme su contraseña"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <Form.Text className="text-muted">
            La contraseña debe ser igual.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    </Container>
  );
}

export default Registro;
