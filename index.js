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
  //function temperatureFar(event) {
  //  event.preventDefault();
  //  let tempCels = document.querySelector("#temperature");
  //  let currentTemp = 29;
  //  let tempFar = Math.round((currentTemp * 9) / 5 + 32);
  //  tempCels.innerHTML = tempFar;
  //}
  //function temperatureCels(event) {
  // event.preventDefault();
  // let tempFar = document.querySelector("#temperature");
  
  //  let tempCels = Math.round(((currentTemp - 32) * 5) / 9);
  //  tempFar.innerHTML = tempCels;
  //}
  
  //let tempFar = document.querySelector("#farenheit");
  //tempFar.addEventListener("click", temperatureFar);
  //let tempCels = document.querySelector("#celsius");
  //tempCels.addEventListener("click", temperatureCels);
  