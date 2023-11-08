import request from "postman-request";

export const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=7b07c95e82399782dd4d739ec152f583&query=${latitude},${longitude}`;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback(error);
        } else if (response.body?.error) {
            callback(response.body?.error);
        } else {
            const { current } = response.body;
            callback(
                undefined,
                current
            );
        }
    });
};
