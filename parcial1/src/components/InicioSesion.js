import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login: username, password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/carros/');
      } else {
        setError('Error de autenticación. Revise sus credenciales');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCancel = () => {
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    
    <div className="d-flex flex-column  align-items-center vh-100">
      <h5 style={{ fontWeight: 'bold'}}>Inicio de sesión</h5>
      
      <Form style={{ width: '300px' }} onSubmit={handleLogin}>
        <Form.Group controlId="username">
          <Form.Label class="form-label d-flex justify-content-beginning align-items-end pe-3" style={{ fontWeight: 'bold' }}>Nombre de usuario</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ backgroundColor: '#bbbbbb', border: '1px solid #ccc' }}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label class="form-label d-flex justify-content-beginning align-items-end pe-3" style={{ fontWeight: 'bold' }}>Contraseña</Form.Label>
          <Form.Control
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ backgroundColor: '#bbbbbb', border: '1px solid #ccc' }}
          />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <Button variant="primary" type="submit">
            Ingresar
          </Button>
          <Button variant="danger" onClick={handleCancel} style={{ color: 'black' }}>
            Cancelar
          </Button>
        </div>
      </Form>
      {error && <Alert variant="danger">{error}</Alert>}

      <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center', position: 'fixed', bottom: '0' }}>
        <p>Contact us: +57 3102105253 - info@tusegundazo.com - @tusegundazo</p>
      </footer>
    </div>
  );
};

export default LoginForm;
