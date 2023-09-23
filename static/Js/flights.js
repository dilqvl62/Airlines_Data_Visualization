// app.js

const total_flights = "http://127.0.0.1:5000/total_flights";
 // const months = [... new Set(data.map(d =>d.month))];
d3.json(total_flights).then((data) => {
  let totalFlights = data.map(item => item.total_arriving_flights);
  let air_carrier_delay = data.map(item => item.air_carrier_delay);
  let natAviat_delay = data.map(item => item.nationalAviat_delay);
  let weather_delay = data.map(item => item.wheather_delay);
  let carrier_name = data.map(item =>item.carrir_name);
  function init() {
    
    const ttl_flights = {
      x: carrier_name,
      y: totalFlights, 
      type: 'bar',
      name: "Total Flights"
    };
    const air_delay = {
      x: carrier_name,
      y: air_carrier_delay, 
      type: 'bar',
      name: "Total Delays"
    };
    const layout = {
      //title: 'Total Flights/Delays throughout the year<br> for major airlines',
      xaxis: {
        title: 'Air Lines',
        dtick: 1,
        tickangle:-45,
        showgrid: false
      },
      yaxis: {
      title: 'Total Flights/Delays',
      showgrid: false
      }
    };
    Plotly.newPlot('bar', [ttl_flights,air_delay], layout);
    
  }
   // Call updatePlotly() when a change takes place to the DOM
   d3.selectAll("#selDataset").on("change", updatePlotly);  
   
    
   
    function updatePlotly() { 
        // Use D3 to select the dropdown menu
      let dropdownMenu = d3.select("#selDataset");
      // Assign the value of the dropdown menu option to a variable
      let dataset = dropdownMenu.property("value");
      // Initialize x and y arrays
      let y = [];

      if(dataset ==='carrier_delay'){
        y = air_carrier_delay
      } 
      
  
      else if(dataset ==='weather_delay'){
        y = weather_delay
      } 

      else if (dataset ==='natAviation_delay'){

        y = natAviat_delay
      }  
      // Note the extra brackets around 'x' and 'y'
      Plotly.restyle("bar", "y", [y], [1]);
    }
    init();
})

