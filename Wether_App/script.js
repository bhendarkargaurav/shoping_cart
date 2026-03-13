//selection element from HTML
const input = document.getElementById("cityInput");
const button = document.getElementById("searchBtn");
const result = document.getElementById("weatherResult");

const apiKey = "384e7a34622e1045cdccf06917912946";


button.addEventListener("click", getWeather);

console.log("kbicba", input);

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){  //e.key tells which key was pressed.
        getWeather();
    }
});

async function getWeather() {

    const city = input.value.trim();

    if(city === "") {
        result.innerHTML = `<p class="error">Please enter a city name</p>`;

        return ;
    }

    result.innerHTML = "Loading...";

    try {
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
       // fetch() sends request to the server.

        if(!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        displayWeather(data);

    } catch (error) {
        result.innerHTML = `<p class="error">${error.message}</p>`;
    }
}

function displayWeather(data) {
    const cityName = data.name;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    const weather = data.weather[0].main;


result.innerHTML = `
        <h2>${cityName}</h2>
        <p class="temp">${temp} °C</p>
        <p>${weather}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind: ${wind} km/h</p>
    `;
}