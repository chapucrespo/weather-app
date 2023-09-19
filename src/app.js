import express from "express";
import path from "path";
import hbs from "hbs";
import * as url from "url";

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
    res.send({
        location: "Santa Fe",
        forecast: [
            {
                temperature: "20 degrees",
                humidity: "70%",
                rain: "0%",
            },
        ],
    });
});

app.listen(3000, () => {
    console.log("server started on port 3000");
});
