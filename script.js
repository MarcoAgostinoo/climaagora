
const apiKey = "27d5a5643053e647152030e8f62d01d2";
const apiCountryURl = "https://flagsapi.com/BE/flat/64.png";

const cityinput = document.getElementById("cityinput");
const searchBtn = document.getElementById("search");

const cityElement = document.getElementById("city");
const tempElement = document.getElementById("temperatura");
const countryFlag = document.getElementById("imgPais");
const weatherCondition = document.getElementById("descripitionCondition");
const weatherIconElement = document.querySelector("#weather-icon");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherContainer = document.querySelector("#weather-data");





//functions

const getWeatherData = async (city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json();
    console.log(data);
    return data;
};

const showWeatherData = async (city) => {
    
    const data = await getWeatherData(city);
    cityElement.innerHTML = data.name;
    tempElement.innerHTML = parseInt(data.main.temp) + "°C";
    countryFlag.src = `https://flagsapi.com/${data.sys.country}/flat/64.png`
    weatherCondition.innerHTML = data.weather[0].description;
    humidity.innerText = `${data.main.humidity}%`;
    wind.innerText = `Vento: ${data.wind.speed} km/h`;
    weatherContainer.classList.remove("hide");
};


//da pra usar tambem event.keyCode === 13 ao invez de if (event.key == 'Enter')
const checkEnter = (event) => {
    if (event.key == 'Enter') {
        const city = cityinput.value;

        showWeatherData(city);
    }
};
//events
searchBtn.addEventListener("click", (e) => {
    const city = cityinput.value;

    showWeatherData(city);
});

