const request = require('request');

const geocode = (address, callback) => {

    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Patna.json?access_token=pk.eyJ1IjoiZGhhcmFtYmlyNzgiLCJhIjoiY2t1bng5cjkzMjRlaTJvb3o1c3Jpd29qeCJ9.TIvGFfs598_AeL9fa1MEDw";
    console.log(url);
    // const encodedUrl = encodeURIComponent(url);
    request({ url: url, json: true }, (error, response) => {
        console.log('Response ' + response);
        if (error) {
            callback('Unable to search data!', undefined);
        } else {
            callback(undefined, response);
        }
    })
}

// geocode('Patna', (error, data) => {
//     console.log('Error ' + error);
//     console.log('response ' + data);
// });
module.exports = geocode;