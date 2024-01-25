import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


function Alerts() {
  const [alerts, setAlerts] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://api-v3.mbta.com/alerts?sort=banner&filter%5Bactivity%5D=BOARD%2CEXIT%2CRIDE',
      );
      setAlerts(result.data.data);
    }
    fetchData();
  }, []);


  return (
    <div style= {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {alerts.map(alert => (
        <Card
          bg='danger'          
          style={{ width: '18rem' }}
          className="mb-2"          
        >
        <Card.Body>
        <Card.Header><center><font size = "5">Alert</font></center></Card.Header>
        <Card.Text>{alert.attributes.header}{alert.attributes.description}</Card.Text>
        </Card.Body>
      </Card>
      ))}      
    </div>
  );
}


export default Alerts;