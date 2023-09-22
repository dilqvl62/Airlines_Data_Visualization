// construct the URL 
const delayed_total = "http://127.0.0.1:5000/monthly_delays"
// Getting the data from the URL 
d3.json(delayed_total).then(data => {
    sharedData = data;
    init();
  }).catch((error) => {
    console.log('Error fetching data:', error);
  });
    // Initialize the div with a default 
  function init() { 
    // Storing the data in variables 
    let Carrier_name = sharedData.map(item => item.carrir_name);
    let late_aircraft_delay = sharedData.map(item =>Math.round(item.late_aircraft_ttl_delay/60));
    let total_carrier_delay = sharedData.map(item =>Math.round(item.total_carrier_delay/60));
    let total_nat_aviat_delay = sharedData.map(item =>Math.round(item.total_nat_aviat_delay/60));
    let total_security_delay = sharedData.map(item =>Math.round(item.total_security_delay/60));
    let total_weather_delay = sharedData.map(item =>Math.round(item.total_weather_delay/60));
    let month = sharedData.map(item =>item.month);
    const uniqueCarrierNames = [...new Set(Carrier_name)];
    
    const select = d3.select("#selDataset2");
    
    console.log(uniqueCarrierNames)
    select.selectAll("option")
     .data([null, ...uniqueCarrierNames])
     .enter()
     .append("option")
     .attr("value", d => d)
     .text(d => d === null ? "All" : d);

    var aircraft_delay = {
        x : month, 
        y : late_aircraft_delay,
        mode:'markers',
        name:'Aircraft Delay',
        text:Carrier_name,
        type:'scatter'

    };
    var security_delay = {
        x : month, 
        y : total_security_delay,
        mode:'markers',
        name:'Security Delay',
        text:Carrier_name, 
        type:'scatter'

    }

    var Carrier_delay = {
        x : month, 
        y : total_carrier_delay,
        mode:'markers',
        name:'Carrier Delay',
        text:Carrier_name, 
        type:'scatter'

    };
    var Nat_aviat_delay = {
        x : month, 
        y : total_nat_aviat_delay,
        mode:'markers',
        name:'Nat_aviat Delay',
        text:Carrier_name, 
        type:'scatter'

    };
    var Weather_delay = {
        x : month, 
        y : total_weather_delay,
        mode:'markers',
        name:'Weather Delay',
        text:Carrier_name, 
        type:'scatter'

    };

    var charts = [aircraft_delay,security_delay,Carrier_delay,Nat_aviat_delay,Weather_delay]
    var layout = {
        xaxis: {
            title: 'Month', 
            dtick: 1,
            tickangle: 0
        },
        yaxis: {
            title: 'Total Delay in Hours',
            
        },
        hovermode: 'closest',
        //title: 'Total Delay Due to diffirent reasons'
    };
    
    Plotly.newPlot('spline', charts, layout)

 }

const optionChanged = (value) => {
    if(value ==="All"){
        init();
    }else{

    let y_aircraft = [], y_security = [], y_Carrier = [], y_NatAvia = [], y_weather = [], X = [];
    let uniqueCarrierNames = [...new Set(sharedData.map(item => item.carrir_name))];
  
        if(uniqueCarrierNames.includes(value)) {
            const filterd_carrier_name = sharedData.filter(item => item.carrir_name === value)
            console.log(filterd_carrier_name)
            X = filterd_carrier_name.map(item => item.month)
            y_aircraft = filterd_carrier_name.map(item => Math.round(item.late_aircraft_ttl_delay/60))
            y_security = filterd_carrier_name.map(item => Math.round(item.total_security_delay/60))
            y_Carrier  = filterd_carrier_name.map(item => Math.round(item.total_carrier_delay/60))
            y_NatAvia = filterd_carrier_name.map(item => Math.round(item.total_nat_aviat_delay/60))
            y_weather = filterd_carrier_name.map(item => Math.round(item.total_weather_delay/60))
            carr_name = value
        }

    Plotly.restyle('spline', {
    x: [X, X, X, X, X],
    y: [y_aircraft, y_security, y_Carrier, y_NatAvia, y_weather],
    text: [carr_name,carr_name,carr_name,carr_name,carr_name], 
    mode: ['lines', 'lines', 'lines', 'lines', 'lines']
  })};
}
