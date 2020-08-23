console.log('Client side javascript loaded!');

fetch('https://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
    })
});

const weatherForm = document.querySelector('form');
const searchInput = document.querySelector('input');
const message1 = document.getElementById('message-1');
const message2 = document.getElementById('message-2');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    message1.textContent = "Loading...";    
    message2.textContent = "";

    getForecast(searchInput.value);
});

const getForecast = (address) => {
    fetch('http://localhost:9999/weather?address=' + address).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message1.textContent = data.error;
            } else {
                message1.textContent = data.location;
                message2.textContent = data.forecast;
            }
        })
    });
};