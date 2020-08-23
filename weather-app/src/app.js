const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Indranil Khedkar'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Indranil Khedkar'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        message: 'This is help page of the weather app',
        name: 'Indranil Khedkar'
    });
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            'error': 'You must provide an address!'
        });
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error });
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error });
            }

            return res.send({
                forecast: forecastData,
                location: location,
                address: req.query.address
            });
        });
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Help article not found!',
        name: 'Indranil Khedkar'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found!',
        name: 'Indranil Khedkar'
    });
});

app.listen(9999, () => {
    console.log('Server is up on port 9999');
});

// const address = process.argv[2];

// if (!address) {
//     return console.log('Please provide an address.');
// }

// geocode(address, (error, { latitude, longitude, location } = {}) => {
//     if (error) {
//         return console.log('Error', error);
//     }

//     forecast(latitude, longitude, (error, forecastData) => {
//         if (error) {
//             return console.log('Error', error);
//         }

//         console.log(location);
//         console.log('Forecast:', forecastData);
//     });
// });

