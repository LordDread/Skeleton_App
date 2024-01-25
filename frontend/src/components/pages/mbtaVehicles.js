import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


function Vehicles() {
  const [vehicles, setVehicles] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://api-v3.mbta.com/vehicles?page%5Blimit%5D=20&sort=label',
      );
      setVehicles(result.data.data);
    }
    fetchData();
  }, []);

function check_current_status(current_status) {
  if (current_status == "IN_TRANSIT_TO"){
    return "In transit"
  }
  if (current_status == "STOPPED_AT"){
    return "Stopped"
  }
  if (current_status == "INCOMING_AT"){
    return "Incoming"
  }
  else{
    return current_status
  }
}
let current_status = "Empty"
  return (
    <div style= {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {vehicles.map(vehicle => (
        <Card
        bg='primary'          
          style={{ width: '18rem' }}
          className="mb-2"
      >
        <Card.Body>
        <Card.Title><font size = "5">Vehicle id: {vehicle.attributes.label}</font></Card.Title>
        <Card.Text>Bearing: {vehicle.attributes.bearing}<br></br>
        Current Status: {current_status = check_current_status(vehicle.attributes.current_status)}</Card.Text>        
        </Card.Body>
      </Card>
      ))}


        <h1>Vehicles</h1>
      {vehicles.map(vehicle => (
        <div key={vehicle.id}>
          <h3>{vehicle.attributes.header}</h3>
          <p>{vehicle.attributes.description}</p>
        </div>
      ))}
    </div>
  );
}


export default Vehicles;