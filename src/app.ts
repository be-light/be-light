import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import { Routes } from "./routes/belight.router";

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();
  constructor() {
    /* app settings */
    this.app = express();

    /* set view folders, pug engine */
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("view engine", "pug");

    /* use body-parser */
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    /* use cookie-parser */
    this.app.use(cookieParser());

    /* setting default static folder */
    this.app.use(express.static("public_dist"));

    /* routing settings */
    this.routePrv.routes(this.app);
  }
}

export default new App().app;
