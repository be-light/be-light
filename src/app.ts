import * as express from "express";
import { Routes } from "./routes/belight.router";

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();
  constructor() {
    this.app = express();
    this.routePrv.routes(this.app);
  }
}

export default new App().app;
