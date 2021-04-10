// Import packages
import Express from "express";
import Mongoose from "mongoose";

// Import project files
import config from "./config/main.config";
import routes from "./api/main.router";

// INIT Express
const app = Express();

Mongoose.connect(config.db.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(config.port, () => {
    console.log(config.db.mongoUrl);
})

app.use(routes);