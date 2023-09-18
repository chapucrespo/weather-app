import express from "express";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const staticUrl = path.join(__dirname, "../public");

const app = express();
app.use(express.static(staticUrl));

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
