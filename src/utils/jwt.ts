import * as jwt from "jsonwebtoken";

class ExpressJWT {
  public jwtObj;

  constructor() {
    this.jwtObj = <any>{};
    this.jwtObj.secret = "gwanwoodev";
  }

  /* Create JWT Token & Return */
  public getToken(id: string): string {
    let token = jwt.sign({ userId: id }, this.jwtObj.secret, {
      expiresIn: "30m"
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
