import { Request, Response } from "express";
import { User } from "../models/user.model";
import * as jwt from "jsonwebtoken";
import secretObj from "../config/jwt";

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

      let token = jwt.sign(
        {
          userId: id
        },
        secretObj.secret,
        {
          expiresIn: "5m"
        }
      );

      User.findOne({ where: { userId: id } }).then(user => {
        //if (user.userPassword === "1234") {
        res.cookie("user", token);
        res.json({
          token: token
        });
        //}
      });
    });
  }
}
