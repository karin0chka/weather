// Feature #1
let currentTime = document.querySelector("#time-string");
let now = new Date();

let hours = now.getHours() > 9 ? now.getHours() : "0" + now.getHours();
let minutes = now.getMinutes() > 9 ? now.getMinutes() : "0" + now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

currentTime.innerHTML = `${day} ${hours}:${minutes}`;

// Feature#2
function searchForCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#type-city");

  let cityName = document.querySelector("h1");
  if (searchInput.value) {
    cityName.innerHTML = `${searchInput.value}`;
  }
}

let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", searchForCity);

// Feature#3
let celsiusType = document.querySelector("#celsius");
let farengateType = document.querySelector("#farengate");
function handlTemperature(temp, type) {
  let temperature = document.querySelector("#number");
  if (type === "celsius") {
    temperature.innerHTML = `8`;
    celsiusType.className = "active-temp";
    farengateType.className = "";
  } else {
    temperature.innerHTML = `55`;
    farengateType.className = "active-temp";
    celsiusType.className = "";
  }
}

celsiusType.addEventListener("click", function () {
  handlTemperature(8, "celsius");
});

farengateType.addEventListener("click", function () {
  handlTemperature(55, "farengate");
});
