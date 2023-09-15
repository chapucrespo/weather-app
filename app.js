import { geocode } from "./utils/geocode.mjs";
import { forecast } from "./utils/forecast.mjs";
import chalk from "chalk";

const location = process.argv[2];

if (location) {
    geocode(location, (error, geoResponse) => {
        if (error) {
            return console.log(error);
        }

        forecast(
            geoResponse.latitude,
            geoResponse.longitude,
            (error, forecastResponse) => {
                if (error) {
                    return console.log(error);
                }
                console.log(chalk.green.inverse(geoResponse.city));
                console.log(forecastResponse);
            }
        );
    });
} else {
    console.log(chalk.red.inverse("Please provide a location"));
}
