import "dotenv/config";
import app from "./app";
import sequelize from "./models/sequelize";
import * as http from "http";
import * as https from "https";

/* Setting Servers */
const HTTP_PORT: any = process.env.HTTP_PORT;
const HTTPS_PORT: any = process.env.HTTPS_PORT;

/* Sequelize Sync */
sequelize.sync({ force: true });

/* Server Start */
http.createServer(app).listen(HTTP_PORT);
https.createServer({}, app).listen(HTTPS_PORT);
