# weather-conditions

## Objective
- Create a JavaScript class to represent general weather conditions and then extend it to display specific weather conditions for a day, to strengthen the understanding of ES6 class syntax, especially inheritance and method overriding.

### Weather Class and its purpose:
- Create Weather class to display general weather conditions.

### DayWeather class and its purpose:
- Extend with another class called  DayWeather to provide detailed weather conditions for a day.

#### Relation:

Both classes are interrelated. Weather class acts as parent class with high level general weather information and DayWeather class acts as a sub class with more detialed information about a certain day of the week while retrieving general weather data from parent class.

```
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
}```

![alt text](image.png)