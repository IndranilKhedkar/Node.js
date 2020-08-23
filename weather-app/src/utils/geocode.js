const request = require('request');

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiaW5kcmFuaWxraGVka2FyIiwiYSI6ImNrZHZ5amxvNzA5amMyeW94enBqNnA1d3gifQ.OLjheIlsr0SlvEgrcqw0_A&limit=1";

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback(`Unable to connect to geolocation service. Error=${error}`, undefined);
        } else if (body.features.length === 0) {
            callback(`Unable to get location details for the input query parameters. Try again with different query parameters.`, undefined);
        } else {
            const longitude = body.features[0].center[0];
            const latitude = body.features[0].center[1];
            const location = body.features[0].place_name;

            callback(undefined, {
                latitude: latitude,
                longitude: longitude,
                location: location
            });
        }
    });
}

module.exports = geocode;

// const geoLocationServiceUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaW5kcmFuaWxraGVka2FyIiwiYSI6ImNrZHZ5amxvNzA5amMyeW94enBqNnA1d3gifQ.OLjheIlsr0SlvEgrcqw0_A&limit=1";
// request({ url: geoLocationServiceUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log(`Unable to connect to geolocation service. Error=${error}`);
//     } else if (response.body.features.length === 0) {
//         console.log(`Unable to get location details for the input query parameters. Try again with different query parameters.`);
//     } else {
//         const longitude = response.body.features[0].center[0];
//         const latitude = response.body.features[0].center[1];
//         console.log(`Longitude: ${longitude}, Latitude: ${latitude}`)
//     }
// });