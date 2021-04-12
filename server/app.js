import Express from "express";
import config from "@config/main.config";
import api from "./api/main.router";
import "@config/mongoose.config";

// INIT Express
const app = Express();

app.listen(config.port, () => {
    console.log(config.db.mongoUrl);
})

app.use(api);