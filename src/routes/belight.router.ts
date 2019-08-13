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
      let token = UserController.verifyToken(req.cookies.user);
      let id, pw, name, email, phone, address;
      [id, pw, name, email, phone, address] = [
        req.body.userId,
        req.body.userPassword,
        req.body.userName,
        req.body.userEmail,
        req.body.userPhoneNumber,
        req.body.userAddress
      ];

      UserController.register(id, pw, name, email, phone, address)
        .then(user => {
          res.json({ status: 200, msg: "Welcome to the BeLight" });
        })
        .catch(() => {
          res.json({ status: 400, error: "ID Already Exists." });
        });
    });
  }
}
