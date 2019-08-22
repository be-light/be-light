import expressJWT from "../utils/jwt";
import {
  ResSkeleton,
  ResponseUser,
  ResponseHostUser
} from "../utils/global.interface";
import { HostUser } from "../models/host.user.model";

interface HostUserControllerInterface {
  successMsg: ResSkeleton;
  login(id: string, pw: string): Promise<ResponseHostUser>;
  register(reqHost: object): Promise<ResSkeleton>;
  bringHostProfile(token: string): Promise<ResponseHostUser>;
  updateHostProfile(reqHost: object, token: string): Promise<ResSkeleton>;
  hostWithDraw(pw: string, token: string): Promise<ResSkeleton>;
}

/* Host User Controller */
class HostUserController implements HostUserControllerInterface {
  public successMsg: ResSkeleton;

  public constructor() {
    this.successMsg = { status: 200, msg: "success" };
  }

  public login(id: string, pw: string): Promise<ResponseHostUser> {
    return new Promise((resolve, reject) => {
      HostUser.findOne({
        where: { hostUserId: id, hostUserPassword: pw },
        attributes: { exclude: ["hostUserPassword"] }
      }).then(host => {
        if (host) resolve(host);
        else reject("ID and Password is not valid.");
      });
    });
  }

  public register(reqHost: object): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {
      HostUser.findOne({ where: { hostUserId: reqHost["hostUserId"] } }).then(
        host => {
          if (!host) {
            HostUser.create({
              hostUserId: reqHost["hostUserId"],
              hostUserPassword: reqHost["hostUserPassword"],
              hostUserName: reqHost["hostUserName"],
              hostUserEmail: reqHost["hostUserEmail"],
              hostUserPhoneNumber: reqHost["hostUserPhoneNumber"]
            })
              .then(host => {
                resolve(this.successMsg);
              })
              .catch(() => {
                reject("Something Errors.");
              });
          } else {
            reject("Id Already Exists.");
          }
        }
      );
    });
  }

  public bringHostProfile(token: string): Promise<ResponseHostUser> {
    return new Promise((resolve, reject) => {
      let hostUserId = expressJWT.verifyToken(token).userId;

      if (hostUserId) {
        HostUser.findOne({
          where: { hostUserId: hostUserId },
          attributes: {
            exclude: ["hostUserPassword"]
          }
        }).then(user => {
          resolve(user);
        });
      } else {
        reject("Your Token is Expired.");
      }
    });
  }

  public updateHostProfile(reqHost: object, tok: string): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {
      let hostUserId = expressJWT.verifyToken(tok).userId;
      if (tok) {
        HostUser.update(
          {
            hostUserEmail: reqHost["hostUserEmail"],
            hostUserName: reqHost["hostUserName"],
            hostUserPhoneNumber: reqHost["hostUserPhoneNumber"]
          },
          { where: { hostUserId: hostUserId }, returning: false }
        )
          .then(host => {
            resolve(this.successMsg);
          })
          .catch(() => {
            reject("Request is not valid");
          });
      } else {
        reject("Maybe Token Expired");
      }
    });
  }

  public hostWithDraw(pw: string, token: string): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {
      let hostUserId = expressJWT.verifyToken(token).userId;
      if (hostUserId) {
        HostUser.destroy({
          where: {
            hostUserId: hostUserId,
            hostUserPassword: pw
          }
        })
          .then(result => {
            if (result) resolve(this.successMsg);
            else reject("Id and Password is not valid.");
          })
          .catch(() => {
            reject("Id and Password is not valid");
          });
      } else {
        reject("Maybe Token Expired.");
      }
    });
  }
}

export default new HostUserController();
