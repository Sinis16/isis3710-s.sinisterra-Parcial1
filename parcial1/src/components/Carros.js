import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FormattedMessage, useIntl, IntlProvider } from 'react-intl';

function Carros() {
  const [cars, setCars] = useState([]);
  const [clickedCar, setClickedCar] = useState(null);

  const intl = useIntl()
  const language = intl.locale;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:3001/cars');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchCars();
  }, []);

  const handleCarClick = (car) => {
    setClickedCar(car);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <div style={{ padding: '20px' }}>
            <table className="table">
              <thead className={`table ${language === "es" ? "table-dark" : "table-light"}`}>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">
                    <FormattedMessage id="Marca" />
                  </th>
                  <th scope="col">
                    <FormattedMessage id="Linea" />
                  </th>
                  <th scope="col">
                    <FormattedMessage id="Modelo" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car, index) => (
                  <tr key={index} onClick={() => handleCarClick(car)}>
                    <td>{car.id}</td>
                    <td>{car.marca}</td>
                    <td>{car.linea}</td>
                    <td>{car.modelo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>
        <Col xs={12} md={4}>

        {clickedCar && (
              <Card style={{ marginTop: '20px' , backgroundColor: '#bbbbbb', border: '1px solid black' }}>
                <Card.Body>
                  <Card.Title>{clickedCar.marca} {clickedCar.linea}</Card.Title>
                  <Card.Text>
                  
                        <Card.Img
                            style={{ height: "10rem", width: "18rem"}}
                            variant="top"
                            src={clickedCar.imagen}
                            alt={clickedCar.marca}
                        />
                    <div style={{ textAlign: 'left' }}>
                        &rarr;<FormattedMessage id="Kilometraje" />:  {clickedCar.kilometraje} <br />
                        &rarr;<FormattedMessage id="Color" />: {clickedCar.color} <br />
                        &rarr;<FormattedMessage id="Referencia" />: {clickedCar.referencia}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
            
        </Col>
      </Row>
      <Row>
      <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center', position: 'fixed', bottom: '0' }}>
        <p>Contact us: +57 3102105253 - info@tusegundazo.com - @tusegundazo</p>
      </footer>

      </Row>
      
    </Container>
    
  );
}

export default Carros;
