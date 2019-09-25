import "dotenv/config";
import app from "./app";
import sequelize from "./models/sequelize";
import * as http from "http";
import * as https from "https";

/* Setting Servers */
const PORT: any = process.env.SERVER_PORT || 3000;

/* Sequelize Sync */
sequelize.sync({ force: false });

/* Server Start */
const httpServer = http.createServer(app);
const httpsServer = https.createServer({}, app);

httpServer.listen(80);
httpsServer.listen(443);
