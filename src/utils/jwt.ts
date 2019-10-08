import * as jwt from "jsonwebtoken";
import { ResponseUser } from "../utils/global.interface";

interface ExpressJWTInterface {
  jwtObj: any;
  getToken(user: any, check: number): string;
  verifyToken(token: string): any;
}

class ExpressJWT implements ExpressJWTInterface {
  public jwtObj;

  constructor() {
    this.jwtObj = <any>{};
    this.jwtObj.secret = "b@rightS@cr@tK1y!!";
  }

  /* Create JWT Token & Return */
  public getToken(user: any, check: number): string {
    if (check === 0) {
      let userToken = jwt.sign(
        {
          userId: user.userId,
          userName: user.userName,
          userEmail: user.userEmail
        },
        this.jwtObj.secret,
        {
          expiresIn: "7d",
          algorithm: "HS256"
        }
      );
      return userToken;
    } else {
      let hostUserToken = jwt.sign(
        {
          userId: user.hostUserId,
          userName: user.hostUserName,
          userEmail: user.hostUserEmail
        },
        this.jwtObj.secret,
        {
          expiresIn: "7d",
          algorithm: "HS256"
        }
      );

      return hostUserToken;
    }
    return undefined;
  }

  /* Verify JWT */
  public verifyToken(token: string): any {
    if (token) {
      return jwt.verify(token, this.jwtObj.secret);
    } else {
      return false;
    }
  }
}

export default new ExpressJWT();
