
const apiKey = "27d5a5643053e647152030e8f62d01d2";
const apiCountryURl = "https://flagsapi.com/BE/flat/64.png";

const cityinput = document.getElementById("cityinput");
const searchBtn = document.getElementById("search");

const cityElement = document.getElementById("city");

//functions

const getWeatherData = async (city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json();

    console.log(data);
};

const showWeatherData = (city) => {
   getWeatherData(city)
}; 

//events
searchBtn.addEventListener("click", (e) => {
    const city = cityinput.value;

    showWeatherData(city);
});

