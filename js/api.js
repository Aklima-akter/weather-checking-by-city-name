const apiKey = '394ea6d571bce64eac2ca69b005bd16a';
const inputField = document.getElementById('input-field');
const searchButton = document.getElementById('search-button');
const cityName = document.getElementById('city-name');
const tempature = document.getElementById('tempature');
const weatherSiuation = document.getElementById('weather-situation');
const weathericon = document.getElementById('weather-icon');
const weatherStutas = document.querySelector('.weather-status');



inputField.addEventListener('keyup', (e) => {

    if (e.keyCode == 13) {

        const searchValue = inputField.value;
        inputField.value = ''
        if (searchValue === '') {
            weatherStutas.innerHTML = ''
            weatherStutas.innerText = 'Please search with city!';
            return;
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=metric`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.cod == 404) {
                    weatherStutas.innerText = 'Invalid city Name!';
                    return;
                }
                weatherStutas.innerHTML = `
                <p id="weather-icon">
                <img  src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                </p>
                <h1 id="city-name">${data.name}</h1>
                <h3><span id="tempature">${data.main.temp} &deg;C</span></h3>
                <h1 id="weather-situation" class="lead">${data.weather[0].main}</h1>
                    
                `


            })
    }

})
/* 
 
 */