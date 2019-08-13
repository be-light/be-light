import { Request, Response } from "express";
import { UserController } from "../controllers/user.controller";
import { User } from "../models/user.model";

export class Routes {
  public routes(app): void {
    /* index.pug routing */
    app.route("/").get((req: Request, res: Response) => {
      res.render("index", {
        title: "BeLight",
        message: "Express.js + Pug + Webpack + Typescript + SaSS"
      });
    });

    app.route("/api/auth/login").post((req: Request, res: Response) => {
      let id = req.body.userId;
      let pw = req.body.userPassword;
      UserController.login(id, pw)
        .then(user => {
          user.setDataValue("token", UserController.getToken(id));
          res.json(user.dataValues);
        })
        .catch(err => {
          res.status(400).json("Bad Request");
        });
    });
  }
}
