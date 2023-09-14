import request from "postman-request";

const url =
    "http://api.weatherstack.com/current?access_key=3a23847a32b8510cae16e7016c5c125d&query=Santa%20Fe";

request({ url: url, json: true }, (error, response) => {
    const { body } = response;
    const { name, country } = body.location;
    const { temperature, humidity, weather_descriptions } = body.current;

    console.log(
        `You're currently in ${name}, ${country}. The day is ${weather_descriptions[0].toLowerCase()}, with a temperature of ${temperature} degrees, and an humidity percentage of ${humidity}%`
    );
});
