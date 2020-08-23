const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=016f1ccade1dd7760ee6ea7221a2a6cb&query=" + latitude + "," + longitude;

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback(`Unable to connect to weather service!. Error=${error}`, undefined);
        } else if (body.error) {
            callback(`Unable to get weather details for the specified parameters. Try again with different parameters.`, undefined);
        } else {
            const temperature = body.current.temperature;
            const feelLikeTemperature = body.current.feelslike;
            const weatherDesc = body.current.weather_descriptions[0];

            callback(undefined, `${weatherDesc}. It is currently ${temperature} degrees out. It feels like ${feelLikeTemperature} degrees out.`)
        }
    });
};

module.exports = forecast;

// const weatherServiceUrl = "http://api.weatherstack.com/current?access_key=016f1ccade1dd7760ee6ea7221a2a6cb&query=akola&units=f";

// request({ url: weatherServiceUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log(`Unable to connect to weather service!. Error=${error}`);
//     } else if (response.body.error) {
//         console.log(`Unable to get weather details for the specified parameters. Try again with different parameters.`);
//     } else {
//         const temperature = response.body.current.temperature;
//         const feelLikeTemperature = response.body.current.feelslike;
//         const weatherDesc = response.body.current.weather_descriptions[0];
//         console.log(`${weatherDesc}. It is currently ${temperature} degrees out. It feels like ${feelLikeTemperature} degrees out.`)
//     }
// });