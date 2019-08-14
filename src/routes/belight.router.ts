import { Request, Response } from "express";
import { UserController } from "../controllers/user.controller";

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
      let loginCheck = UserController.loginCheck(req.cookies.user);

      if (!loginCheck) {
        //Login Check
        res.json({ status: 400, error: "Already logged in." });
        return;
      }

      UserController.login(id, pw)
        .then(user => {
          let token = UserController.getToken(id);
          res.cookie("user", token); // token save - req.cookies.user
          res.json({ status: 200, token: token }); // return token
        })
        .catch(() => {
          res.json({ status: 400, error: "Check Your id and pw" });
        });
    });

    app.route("/api/auth/register").post((req: Request, res: Response) => {
      let isToken = UserController.verifyToken(req.cookies.user);
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
          res.json({ status: 200, msg: "Welcome to the BeLight" });
        })
        .catch(() => {
          res.json({ status: 400, error: "ID Already Exists." });
        });
    });
  }
}
