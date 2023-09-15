import { geocode } from "./utils/geocode.mjs";
import { forecast } from "./utils/forecast.mjs";

geocode("San Francisco", (error, response) => {
    error && console.log({ call: "geocode", error });
    response && console.log({ call: "geocode", response });
});

forecast(34.122, -12.44, (error, response) => {
    error && console.log({ call: "forecast", error });
    response && console.log({ call: "forecast", response });
});
