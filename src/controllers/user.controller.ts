import expressJWT from "../utils/jwt";
import { ResSkeleton, ResponseUser } from "../utils/global.interface";
import { User } from "../models/user.model";

interface UserControllerInterface {
  login(id: string, pw: string): Promise<ResponseUser>;
  loginCheck(token: string): boolean;
  register(reqUser: object): Promise<User>;
  bringMyProfile(token: string): Promise<ResponseUser>;
  updateMyProfile(reqUser: object): Promise<ResSkeleton>;
  withDraw(token: string): Promise<ResSkeleton>;
}

class UserController implements UserControllerInterface {
  public login(id: string, pw: string): Promise<ResponseUser> {
    return new Promise((resolve, reject) => {
      let responseJSON = <any>{};

      User.findOne({ where: { userId: id, userPassword: pw } }).then(user => {
        if (user.dataValues) {
          responseJSON.userId = user.dataValues.id;
          responseJSON.userName = user.dataValues.userName;
          responseJSON.userEmail = user.dataValues.userEmail;
          responseJSON.userPhoneNumber = user.dataValues.userPhoneNumber;
          responseJSON.userAddress = user.dataValues.userAddress;
          resolve(responseJSON);
        } else {
          reject(new Error("Check Your id and pw"));
        }
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
    return isToken.userId ? true : false;
  }

  public bringMyProfile(token: string): Promise<ResponseUser> {
    return new Promise((resolve, reject) => {
      let tokens = expressJWT.verifyToken(token);
      let responseJSON = <any>{};

      if (tokens) {
        User.findOne({ where: { userId: tokens.userId } }).then(user => {
          responseJSON.userId = user.dataValues.id;
          responseJSON.userName = user.dataValues.userName;
          responseJSON.userEmail = user.dataValues.userEmail;
          responseJSON.userPhoneNumber = user.dataValues.userPhoneNumber;
          responseJSON.userAddress = user.dataValues.userAddress;
          resolve(responseJSON);
        });
      } else {
        reject(new Error("Something Error."));
      }
    });
  }

  public updateMyProfile(reqUser: object): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
  }

  public withDraw(token: string): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
  }
}

export default new UserController();
