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
let current_bearing = "Empty"

function bearing_to_compass_converter(current_bearing){
  if (current_bearing >= 338 || current_bearing <= 22){
    return "North"
  }
  else if (current_bearing >= 23 && current_bearing <= 67){
    return "Northeast"
  }
  else if (current_bearing >= 68 && current_bearing <= 112){
    return "East"
  }
  else if (current_bearing >= 113 && current_bearing <= 157){
    return "Southeast"
  }
  else if (current_bearing >= 158 && current_bearing <= 202){
    return "South"
  }
  else if (current_bearing >= 203 && current_bearing <= 247){
    return "Southwest"
  }
  else if (current_bearing >= 248 && current_bearing <= 292){
    return "West"
  }
  else if (current_bearing >= 293 && current_bearing <= 337){
    return "Northwest"
  }
  else {
    return current_bearing
  }
}


let current_status = "Empty"
  return (    
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Quick Start</title>
    </head>
    <body>
      <div id="map"></div>
      <script type="module" src="./main.js"></script>
    </body>
  </html>
  );
}


export default Vehicles;