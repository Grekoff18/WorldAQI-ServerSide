import dotenv from "dotenv";
dotenv.config();

const env = process.env.APP_ENV || "development";

const development = {
  env: env,
  port: process.env.APP_PORT,
  url: `http://localhost:${process.env.APP_PORT}`,
  db: {
    mongoUrl: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
  }
}

const production = {
  env: env,
  port: process.env.APP_PORT,
  url: `https://example.com`,
  db: {
    // mongoUrl: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
  }
}

const config = {
  development,
  production
}

export default config[env];