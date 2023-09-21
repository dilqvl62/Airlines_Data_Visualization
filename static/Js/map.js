// Creating the map object
let myMap = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 11
  });
// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// getting the data from the database and storing it in a variable!
const total_canceled_flights = "http://127.0.0.1:5000/heat_map"

d3.json(total_canceled_flights).then((data) => {
  





}) 