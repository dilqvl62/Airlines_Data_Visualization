// Creating the map object
let myMap = L.map("map", {
  center: [37.0902, -95.7129],
  zoom: 3.3
  });
// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// getting the data from the database and storing it in a variable!
const total_canceled_flights = "http://127.0.0.1:5000/heat_map"

d3.json(total_canceled_flights).then((data) => {
  
// Filter only the top 10 Busiest (and Biggest) airports in the US
top_ten_Bussiest_Biggest = ["ATL", "LAX", "ORD", "DFW","DEN","JFK","SFO","SEA","LAS","MCO"]

// Define a markerSize() function that will give each city a different radius based on its population.
function markerSize(cancelation) {
  return Math.sqrt(cancelation) * 2000;
}
// Loop through the data and create one marker for each airport object 
for (let i = 0; i < data.length; i ++) {
  if(top_ten_Bussiest_Biggest.includes(data[i].airportCode)){
    console.log(data[i].airportCode,data[i].airportName)
    const location = [data[i].Latitude, data[i].Longitude]
    L.circle(location, {
      fillOpacity:0.75,
      color: "white",
      fillColor: "red",
      // Setting our circle's radius to equal the total canceled flights.
      // This will make our marker's size proportionate to its cancelation.
      radius : markerSize(data[i].total_flights_canceled)
    }).bindPopup(`<h1>${data[i].airportName}</h1> <hr> <h3>Canceled: ${data[i].total_flights_canceled.toLocaleString()}</h3>`).addTo(myMap);

  }
}

}) 