import expressJWT from "../utils/jwt";
import { ResSkeleton, ResponseUser } from "../utils/global.interface";
import { User } from "../models/user.model";

interface UserControllerInterface {
  successMsg: ResSkeleton;
  login(id: string, pw: string): Promise<ResponseUser>;
  register(reqUser: object): Promise<ResSkeleton>;
  bringMyProfile(token: string): Promise<ResponseUser>;
  updateMyProfile(reqUser: object, token: string): Promise<ResSkeleton>;
  withDraw(token: string): Promise<ResSkeleton>;
}

class UserController implements UserControllerInterface {
  public successMsg: ResSkeleton;

  public constructor() {
    this.successMsg = { status: 200, msg: "success" };
  }

  public login(id: string, pw: string): Promise<ResponseUser> {
    return new Promise((resolve, reject) => {
      User.findOne({
        where: { userId: id, userPassword: pw },
        attributes: { exclude: ["userPassword"] }
      }).then(user => {
        if (user) resolve(user);
        else reject(new Error("Check Your id and pw"));
      });
    });
  }

  public register(reqUser: object): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {
      User.findOne({ where: { userId: reqUser["id"] } }).then(user => {
        if (!user) {
          User.create({
            userId: reqUser["id"],
            userPassword: reqUser["pw"],
            userName: reqUser["name"],
            userEmail: reqUser["email"],
            userPhoneNumber: reqUser["phone"],
            userAddress: reqUser["address"]
          }).then(user => {
            resolve(this.successMsg);
          });
        } else {
          reject(new Error("ID Already Exists."));
        }
      });
    });
  }

  public bringMyProfile(token: string): Promise<ResponseUser> {
    return new Promise((resolve, reject) => {
      let tokens = expressJWT.verifyToken(token);

      if (tokens) {
        User.findOne({
          where: { userId: tokens.userId },
          attributes: {
            exclude: ["userPassword"]
          }
        }).then(user => {
          resolve(user);
        });
      } else {
        reject(new Error("Something Error."));
      }
    });
  }

  public updateMyProfile(reqUser: object, token: string): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {
      let tokens = expressJWT.verifyToken(token);

      if (tokens) {
        User.update(
          {
            userEmail: reqUser["email"],
            userPhone: reqUser["phone"],
            userAddress: reqUser["address"]
          },
          {
            where: { userId: tokens.userId },
            returning: false
          }
        )
          .then(user => {
            resolve(this.successMsg);
          })
          .catch(() => {
            reject("Something Error.");
          });
      } else {
        reject(new Error("Maybe Token Expired."));
      }
    });
  }

  public withDraw(token: string): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
  }
}

export default new UserController();
