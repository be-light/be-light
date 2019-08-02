import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/belight.router";

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();
  constructor() {
    /* app settings */
    this.app = express();
    this.routePrv.routes(this.app);

    /* set view folders, pug engine */
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("view engine", "pug");

    /* use body-parser */
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    /* setting  default static folder */
    this.app.use(express.static("public"));
  }
}

export default new App().app;
