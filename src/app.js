import express from "express";

const app = express();

app.get("", (req, res) => {
    res.send("Hello Express");
});

app.get("/help", (req, res) => {
    res.send("Help page");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>");
});

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
