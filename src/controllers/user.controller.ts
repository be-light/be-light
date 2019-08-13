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

  public static register(
    id: string,
    pw: string,
    name: string,
    email: string,
    phone: string,
    address: string
  ): Promise<User> {
    return new Promise((resolve, reject) => {
      User.findOne({ where: { userId: id } }).then(user => {
        if (!user) {
          User.create({
            userId: id,
            userPassword: pw,
            userName: name,
            userEmail: email,
            userPhoneNumber: phone,
            userAddress: address
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
}
