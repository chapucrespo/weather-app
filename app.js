import request from "postman-request";
import chalk from "chalk";

const url =
    "http://api.weatherstack.com/current?access_key=3a23847a32b8510cae16e7016c5c125d&query=Santa%20Fe";

const locationUrl =
    "http://api.positionstack.com/v1/forward?access_key=0c7c5f04de6aeaa3df97946c70ba12a2&query=SF,%20Argentina";

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log(
            chalk.red.inverse("Unable to connect to weatherstack, try again")
        );
    } else if (response.body?.error) {
        console.log(
            `The fetch failed with message: ${chalk.red(
                response.body.error.info
            )}`
        );
    } else {
        const { body } = response;
        const { name, country } = body.location;
        const { temperature, humidity, weather_descriptions } = body.current;

        console.log(
            `You're currently in ${name}, ${country}. The day is ${weather_descriptions[0].toLowerCase()}, with a temperature of ${temperature} degrees, and an humidity percentage of ${humidity}%`
        );
    }
});

request({ url: locationUrl, json: true }, (error, response) => {
    if (error) {
        console.log(
            chalk.red.inverse("Unable to connect to positionstack, try again")
        );
    } else if (response.body?.error) {
        console.log(
            `The fetch failed with message ${chalk.red(
                response.body.error.message
            )}`
        );
    } else {
        const { data } = response.body;
        console.log(
            `Latitude: ${data[0].latitude} - Longitude: ${data[0].longitude}`
        );
    }
});
