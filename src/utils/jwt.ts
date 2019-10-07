import * as jwt from "jsonwebtoken";

interface ExpressJWTInterface {
  jwtObj: any;
  getToken(id: string): string;
  verifyToken(token: string): any;
}

class ExpressJWT implements ExpressJWTInterface {
  public jwtObj;

  constructor() {
    this.jwtObj = <any>{};
    this.jwtObj.secret = "b@rightS@cr@tK1y!!";
  }

  /* Create JWT Token & Return */
  public getToken(id: string): string {
    let token = jwt.sign({ userId: id }, this.jwtObj.secret, {
      expiresIn: "30m",
      algorithm: "HS256"
    });

    return token;
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
