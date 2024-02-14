"use strict";

class Weather { // General weather conditions
  constructor(temperature, precipitation, windSpeed) {
    this.temperature = temperature;
    this.precipitation = precipitation;
    this.windSpeed = windSpeed;
  }
  weatherContions() {
    console.log(
      `The temperature is ${this.temperature} degrees, with a ${this.precipitation} chance of rain and a wind speed of ${this.windSpeed} mph`
    );
  }
}

class DayWeather extends Weather { // Specific weather conditions for a day
  constructor(temperature, precipitation, windSpeed, day, weatherAlert) {
    super(temperature, precipitation, windSpeed);
    this.day = day; // Day of the week (e.g. Monday, Tuesday, etc.)
    this.weatherAlert= weatherAlert; // Displays any weather alerts for the day
  }
  weatherContions() {
    console.log(
      `The temperature on ${this.day} is ${this.temperature} degrees, with ${this.precipitation} chance of rain, wind speed is ${this.windSpeed} mph, and there will be: ${this.weatherAlert}`
    );
}
}
const weather = new Weather(75, "20%", 5);
const dayWeather = new DayWeather(60, "80%", 40, "Friday", "Tornado Warning");
const dayWeather1 = new DayWeather(80, "10%", 10, "Saturday", "Sunny Skies");
weather.weatherContions();
dayWeather.weatherContions();
dayWeather1.weatherContions();

