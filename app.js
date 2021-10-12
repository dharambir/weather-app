const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const request = require('request');
// const url ='http://api.weatherstack.com/current?access_key=d7f19a4c536c6104720308b9271667f9&query=New%20York';

// request({url:url,json:true},(error,response)=>{
//     const data=response.body;
//     const current=data.current;
//     console.log(data);
// })

// geocode('Patna', (error, data) => {
//     // console.log('Error ' + error);
//     console.log('response ' + data);
// });

// forecast(85.14139, 25.61, (error, response) => {
//     console.log("eror " + error);
//     console.log("response " + response);
// });

const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Patna.json?access_token=pk.eyJ1IjoiZGhhcmFtYmlyNzgiLCJhIjoiY2t1bng5cjkzMjRlaTJvb3o1c3Jpd29qeCJ9.TIvGFfs598_AeL9fa1MEDw";
// const encodedUrl = encodeURIComponent(url);
request({ url: url, json: true }, (error, response) => {
    console.log('Response ' + response.data);
})