import request from "postman-request";

export const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=3a23847a32b8510cae16e7016c5c125d&query=${latitude},${longitude}`;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback(error);
        } else if (response.body?.error) {
            callback(response.body?.error);
        } else {
            const { current } = response.body;
            callback(
                undefined,
                `The current temperature is ${current.temperature}°C, it feels like ${current.feelslike}°C. The humidity is ${current.humidity}% and there's ${current.precip}% chances of rain.`
            );
        }
    });
};
