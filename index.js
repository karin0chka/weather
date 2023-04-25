let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    oslo: {
      temp: -5,
      humidity: 20
    }
  };
  
  // write your code here
  
function button() {
  let cityName = prompt("Enter a city", "City name").trim().toLowerCase();
  const result = weather[cityName]
  if (result) {
    alert(
      `It is currently ${result.temp}°C in ${cityName} with a humidity of ${result.humidity}`
    );
  } else {
    alert(
      "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"
    );
  }
}
