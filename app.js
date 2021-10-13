const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// console.log(process.argv[2]);
if (process.argv[2] == undefined) {
    return console.log('Please enter location!');
}
const address = process.argv[2];
console.log(address);
geocode(address, (error, geocodeData) => {
    // console.log('Error ' + error);
    // console.log('response ' + geocodeData.latitude);
    if (error) {
        return console.log(error);
    }
    forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }
        //     // const data = response.body;
        console.log("response " + forecastData);
    });
});

// forecast(85.14139, 25.61, (error, response) => {
//     console.log("eror " + error);
//     console.log("response " + response);
// });