import express from "express";
import env from "dotenv";

const app = express();
const port = 5000;
app.get("/api", (req, res) => {
    res.json({ "news": ["newsOne", "newsTwo", "newsThree", "newsFour"] })
})
app.listen(port, () => {
    console.log("Listening on port " + port)
})