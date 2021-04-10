import Mongoose from "mongoose";
import config from "@config/main.config";

// Connection to mongoDB
Mongoose.connect(config.db.mongoUrl, {
  // keepAlive: 1,
  // useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Connection error handling
Mongoose.connection.on('error', () => {
  throw new Error(`Unable to connect to database: ${config.db.mongoUrl}`);
});