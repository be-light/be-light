import * as jwt from "jsonwebtoken";
import secretObj from "../config/jwt";
import { User } from "../models/user.model";

export class UserController {
  public static login(id: string, pw: string): Promise<User> {
    return new Promise((resolve, reject) => {
      User.findOne({ where: { userId: id, userPassword: pw } }).then(user => {
        if (user) resolve(user);
        else reject(new Error("Check Your Account"));
      });
    });

    //let token = this.getToken(id);
    //return token;
  }

  public static getToken(id: string): string {
    let token = jwt.sign({ userId: id }, secretObj.secret, {
      expiresIn: "10m"
    });

    return token;
  }
}
