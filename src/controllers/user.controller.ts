import * as jwt from "jsonwebtoken";
import secretObj from "../config/jwt";
import { User } from "../models/user.model";

export class UserController {
  public static login(id: string, pw: string): Promise<User> {
    return new Promise((resolve, reject) => {
      User.findOne({ where: { userId: id, userPassword: pw } }).then(user => {
        if (user) resolve(user);
        else reject(new Error("Check Your id and pw"));
      });
    });
  }

  public static register(reqUser: object): Promise<User> {
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

  public static getToken(id: string): string {
    let token = jwt.sign({ userId: id }, secretObj.secret, {
      expiresIn: "10m"
    });

    return token;
  }

  public static verifyToken(token: string): any {
    if (token) return jwt.verify(token, secretObj.secret);
    else return false;
  }
  public static loginCheck(token: string): boolean {
    let isToken = this.verifyToken(token);
    if (isToken) return true;
    else return false;
  }
}
