import { Request, Response } from "express";
import UserController from "../controllers/user.controller";
import expressJWT from "../utils/jwt";

export class Routes {
  public routes(app): void {
    /* index.pug routing */
    app.route("/").get((req: Request, res: Response) => {
      res.render("index", {
        title: "BeLight",
        message: "Express.js + Pug + Webpack + Typescript + SaSS"
      });
    });

    /* User Login */
    app.route("/api/auth/login").post((req: Request, res: Response) => {
      let id = req.body.userId;
      let pw = req.body.userPassword;
      if (req.cookies.user) {
        res.redirect("/");
        return;
      }

      UserController.login(id, pw)
        .then(user => {
          let token = expressJWT.getToken(id);
          res.cookie("user", token); // token save - req.cookies.user
          res.json({ status: 200, token: token }); // return token
        })
        .catch(() => {
          res.json({ status: 400, msg: "Check Your id and pw" });
        });
    });

    /* User Register */
    app.route("/api/auth/register").post((req: Request, res: Response) => {
      if (req.cookies.user) {
        res.redirect("/");
        return;
      }

      let reqUser = {
        id: req.body.userId,
        pw: req.body.userPassword,
        name: req.body.userName,
        email: req.body.userEmail,
        phone: req.body.userPhoneNumber,
        address: req.body.userAddress
      };

      UserController.register(reqUser)
        .then(user => {
          res.json(user);
        })
        .catch(() => {
          res.json({ status: 400, msg: "ID Already Exists." });
        });
    });

    /* Bring User Profile */
    app.route("/api/user").get((req: Request, res: Response) => {
      UserController.bringMyProfile(req.cookies.user)
        .then(user => {
          res.json({ status: 200, msg: "Get Your Profile..", user: user });
        })
        .catch(() => {
          res.json({ status: 400, msg: "You have to login now." });
        });
    });
  }
}
