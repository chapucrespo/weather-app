import express from "express";
import path from "path";
import hbs from "hbs";
import * as url from "url";
import { geocode } from '../utils/geocode.mjs'
import {forecast} from '../utils/forecast.mjs'

//Paths
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const staticUrl = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Express main instance
const app = express();

//Handlebars engine and views location setting
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Serve static resources
app.use(express.static(staticUrl));

app.get("", (req, res) => {
    res.render("index", {
        tab: "Weather app",
        title: "Welcome to my app",
        location: "Los Angeles",
        temperature: "30°C",
        humidity: "80%",
        rain: "20%",
        wind: "200",
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        tab: "Help section",
        title: "Need help?",
        paragraph: "Contact me on github",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        tab: "About this page",
        title: "About me",
        paragraph: "My name's Marina and I'm a Jr. Frontend developer",
    });
});

//static weather, returns JSON
app.get("/weather", (req, res) => {
    if(!req.query.location) {
        return res.send('You must provide a location')
    } 

    geocode(req.query.location, (error, {latitude, longitude, city}) => {
        if(error) {
            return res.send({error})
        } else {
            forecast(latitude, longitude, (error, forecastData) => {
                const {temperature, feelslike, humidity, precip, weather_descriptions } = forecastData;
                if(error) {
                    return res.send({error})
                } else {
                    return res.send(`You're in ${city}. 
                    The day is ${weather_descriptions}, with a temperature of ${temperature}°.
                    It feels like like ${feelslike}. 
                    There's a ${precip}% chances of rain and ${humidity}% of humidity`)
                }
            })
        }
    })
});

debugger

app.get("/help/*", (req, res) => {
    res.render("error", {
        errorMessage: "help article not found",
    });
});

app.get("*", (req, res) => {
    res.render("error", {
        errorMessage: "404 page not found",
    });
});

app.listen(3000, () => {
    console.log("server started on port 3000");
});
