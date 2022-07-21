function dateNow(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let currentDay = days[date.getDay()];
  let currentHours = date.getHours();
  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }
  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let timeNow = `${currentDay} ${currentHours}:${currentMinutes}`;
  return timeNow;
}
let now = new Date();
let currentTime = document.querySelector("h3");
currentTime.innerHTML = dateNow(now);

function yourPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "7f5a3748cbe33e0ca87d6a6fcae64515";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(nowWeather);
}
function showPosition(position) {
  navigator.geolocation.getCurrentPosition(yourPosition);
}
let locationButton = document.querySelector("#geoButton");
locationButton.addEventListener("click", showPosition);
searchCity("Kyiv");

function searchCity(city) {
  let apiKey = "7f5a3748cbe33e0ca87d6a6fcae64515";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(nowWeather);
}

function submitCity(event) {
  event.preventDefault();
  let city = document.querySelector("#yourLocation").value;
  searchCity(city);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", submitCity);

function nowWeather(response) {
  let city = response.data.name;
  let yourCity = document.querySelector("#current-city");
  yourCity.innerHTML = city;
  let temperature = Math.round(response.data.main.temp);
  let tempNow = document.querySelector("#temp-value");
  tempNow.innerHTML = temperature;
  let wind = Math.round(response.data.wind.speed);
  let windNow = document.querySelector("#wind");
  windNow.innerHTML = wind;
  let humidity = response.data.main.humidity;
  let humidityNow = document.querySelector("#humidity");
  humidityNow.innerHTML = humidity;
}

//Feature #2
//function location(event) {
//  event.preventDefault();
//  let cityInput = document.querySelector("#yourLocation");
// let h2 = document.querySelector("h2");

// h2.innerHTML = `${cityInput.value}`;
//}

//let form = document.querySelector("#search-form");
//form.addEventListener("submit", location);

//Feature #3
function temperatureFar(event) {
  event.preventDefault();
  let tempCels = document.querySelector("#temperature");
  let currentTemp = 29;
  let tempFar = Math.round((currentTemp * 9) / 5 + 32);
  tempCels.innerHTML = tempFar;
}
function temperatureCels(event) {
  event.preventDefault();
  let tempFar = document.querySelector("#temperature");

  let tempCels = Math.round(((currentTemp - 32) * 5) / 9);
  tempFar.innerHTML = tempCels;
}

//let tempFar = document.querySelector("#farenheit");
//tempFar.addEventListener("click", temperatureFar);
//let tempCels = document.querySelector("#celsius");
//tempCels.addEventListener("click", temperatureCels);
