const apiKey = '394ea6d571bce64eac2ca69b005bd16a';
const inputField = document.getElementById('input-field');
const searchButton = document.getElementById('search-button');
const cityName = document.getElementById('city-name');
const tempature = document.getElementById('tempature');
const weatherSiuation = document.getElementById('weather-situation');
const weathericon = document.getElementById('weather-icon');



searchButton.addEventListener('click', () => {
    const searchValue = inputField.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            cityName.innerText = `${data.name}`;
            tempature.innerText = `${data.main.temp} C`;
            weatherSiuation.innerText = `${data.weather[0].main}`
            weathericon.innerHTML = `
            <img  src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            `
        })
})