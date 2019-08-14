import expressJWT from "../utils/jwt";
import { ResSkeleton } from "../utils/global.interface";
import { User } from "../models/user.model";

interface UserControllerInterface {
  login(id: string, pw: string): Promise<User>;
  loginCheck(token: string): boolean;
  register(reqUser: object): Promise<User>;
  bringMyProfile(id: string): Promise<User>;
  updateMyProfile(reqUser: object): Promise<ResSkeleton>;
  withDraw(id: string, pw: string): Promise<ResSkeleton>;
}

class UserController implements UserControllerInterface {
  public login(id: string, pw: string): Promise<User> {
    return new Promise((resolve, reject) => {
      User.findOne({ where: { userId: id, userPassword: pw } }).then(user => {
        if (user) resolve(user);
        else reject(new Error("Check Your id and pw"));
      });
    });
  }

  public register(reqUser: object): Promise<User> {
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
            resolve(user);
          });
        } else {
          reject(new Error("Already Exists."));
        }
      });
    });
  }

  public loginCheck(token: string): boolean {
    let isToken = expressJWT.verifyToken(token);
    if (isToken) return true;
    else return false;
  }

  public bringMyProfile(id: string): Promise<User> {
    return new Promise((resolve, reject) => {});
  }

  public updateMyProfile(reqUser: object): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
  }

  public withDraw(id: string, pw: string): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
  }
}

export default new UserController();
