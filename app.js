import request from "postman-request";

const url =
    "http://api.weatherstack.com/current?access_key=3a23847a32b8510cae16e7016c5c125d&query=Buenos%20Aires";

request({ url: url }, (error, response) => {
    console.log(response);
});
