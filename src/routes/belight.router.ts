import { Request, Response } from "express";
import UserController from "../controllers/user.controller";
import HostUserController from "../controllers/host.user.controller";
import HostController from "../controllers/host.controller";
import UserOrderController from "../controllers/user.order.controller";
import expressJWT from "../utils/jwt";

export class Routes {
  public routes(app): void {
    /* index.pug routing (API TEST PAGE)*/
    app.route("/").get((req: Request, res: Response) => {
      res.render("index", {
        title: "BeLight",
        message: "Express.js + Pug + Webpack + Typescript + SaSS"
      });
    });

    // User =====
    /* User Login */
    app.route("/api/auth/login").post((req: Request, res: Response) => {
      let id: string = req.body.userId;
      let pw: string = req.body.userPassword;
      if (req.cookies.user) {
        res.redirect("/");
        return;
      }

      UserController.login(id, pw)
        .then(user => {
          let token: string = expressJWT.getToken(id);
          res.cookie("user", token); // token save - req.cookies.user
          res.json({ status: 200, token: token }); // return token
        })
        .catch(msg => {
          res.json({ status: 400, msg: msg });
        });
    });

    /* User Register */
    app.route("/api/auth/register").post((req: Request, res: Response) => {
      if (req.cookies.user) {
        res.redirect("/");
        return;
      }

      let reqUser: object = {
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
        .catch(msg => {
          res.json({ status: 400, msg: msg });
        });
    });

    /* Bring User Profile */
    app.route("/api/user").get((req: Request, res: Response) => {
      UserController.bringMyProfile(req.cookies.user)
        .then(user => {
          res.json({ status: 200, msg: "Get Your Profile..", user: user });
        })
        .catch(msg => {
          res.clearCookie("user");
          res.status(403).json({ status: 403, msg: msg });
        });
    });

    /* Update My Profile */
    app.route("/api/user").put((req: Request, res: Response) => {
      let reqUser: object = {
        email: req.body.userEmail,
        phone: req.body.userPhoneNumber,
        address: req.body.userAddress
      };

      UserController.updateMyProfile(reqUser, req.cookies.user)
        .then(user => {
          res.json(user);
        })
        .catch(msg => {
          res.clearCookie("user");
          res.status(403).json({ status: 403, msg: msg });
        });
    });

    /* Destory User */
    app.route("/api/user").delete((req: Request, res: Response) => {
      let userPassword: string = req.body.userPassword;

      UserController.withDraw(userPassword, req.cookies.user)
        .then(user => {
          res.clearCookie("user");
          res.json(user);
        })
        .catch(msg => {
          res.status(400).json({ status: 400, msg: msg });
        });
    });

    // HostUser ---
    /* HostUser Login */
    app.route("/api/auth/hoster/login").post((req: Request, res: Response) => {
      let id: string = req.body.hostUserId;
      let pw: string = req.body.hostUserPassword;
      if (req.cookies.host) {
        res.redirect("/");
        return;
      }

      HostUserController.login(id, pw)
        .then(user => {
          let token: string = expressJWT.getToken(id);
          res.cookie("host", token); // token save - req.cookies.user
          res.json({ status: 200, token: token }); // return token
        })
        .catch(msg => {
          res.json({ status: 400, msg: msg });
        });
    });

    /* HostUser Register */
    app.route("/api/hoster/register").post((req: Request, res: Response) => {
      if (req.cookies.host) {
        res.redirect("/");
        return;
      }

      let reqHost: object = {
        hostUserId: req.body.hostUserId,
        hostUserPassword: req.body.hostUserPassword,
        hostUserName: req.body.hostUserName,
        hostUserEmail: req.body.hostUserEmail,
        hostUserPhoneNumber: req.body.hostUserPhoneNumber
      };

      HostUserController.register(reqHost)
        .then(host => {
          res.json(host);
        })
        .catch(msg => {
          res.json({ status: 400, msg: msg });
        });
    });

    /* HostUser Get Profile */
    app.route("/api/hoster").get((req: Request, res: Response) => {
      HostUserController.bringHostProfile(req.cookies.host)
        .then(host => {
          res.json({ status: 200, msg: "Get Your Profile..", user: host });
        })
        .catch(msg => {
          res.clearCookie("host");
          res.status(403).json({ status: 403, msg: msg });
        });
    });

    /* HostUser Profile Update */
    app.route("/api/hoster").put((req: Request, res: Response) => {
      let reqUser: object = {
        hostUserEmail: req.body.hostUserEmail,
        hostUserPhoneNumber: req.body.hostUserPhoneNumber,
        hostUserName: req.body.hostUserName
      };

      HostUserController.updateHostProfile(reqUser, req.cookies.host)
        .then(host => {
          res.json(host);
        })
        .catch(msg => {
          res.clearCookie("host");
          res.status(403).json({ status: 403, msg: msg });
        });
    });

    /* HostUser Destroy */
    app.route("/api/hoster").delete((req: Request, res: Response) => {
      let hostUserPassword: string = req.body.hostUserPassword;

      HostUserController.hostWithDraw(hostUserPassword, req.cookies.host)
        .then(host => {
          res.clearCookie("host");
          res.json(host);
        })
        .catch(msg => {
          res.status(400).json({ status: 400, msg: msg });
        });
    });

    // Host =====
    /* Get all Host */
    app.route("/api/host").get((req: Request, res: Response) => {});

    /* Add New Host */
    app.route("/api/host").post((req: Request, res: Response) => {});

    /* update Host */
    app.route("/api/host").put((req: Request, res: Response) => {});

    /* Destroy Host */
    app.route("/api/host").delete((req: Request, res: Response) => {});

    // UserOrder =====
    /* Get User Order List */
    app.route("/api/user/order").get((req: Request, res: Response) => {
      if (req.cookies.user) {
        res.redirect("/");
        return;
      }
    });

    /* Request New User Order */
    app.route("/api/user/order").post((req: Request, res: Response) => {
      if (!req.cookies.user) {
        res.redirect("/");
        return;
      }

      let reqOrder: object = {
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        paid: req.body.paid
      };

      UserOrderController.requestNewOrder(reqOrder, req.cookies.user)
        .then(order => {
          res.json(order);
        })
        .catch(msg => {
          res.json({ status: 400, msg: msg });
        });
    });
  }
}
