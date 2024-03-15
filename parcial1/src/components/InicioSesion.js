import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === 'user' && password === '123') {
      console.log('Login successful');
      setUsername('');
      setPassword('');
      setError('');
      
      setLoggedIn(true);
    } else {
      setError('Nombre de usuario o contraseña incorrectos.');
    }
  };

  const handleCancel = () => {
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>Inicio de Sesion</h1>
      
      <Form style={{ width: '300px' }} onSubmit={handleLogin}>
        <Form.Group controlId="username">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <Button variant="primary" type="submit">
            Ingresar
          </Button>
          <Button variant="danger" onClick={handleCancel}>
            Cancelar
          </Button>
        </div>
      </Form>
      {error && <Alert variant="danger">{error}</Alert>}
      {loggedIn && <Link to="/Carros">Ir al Dashboard</Link>}
    </div>
  );
};

export default LoginForm;
