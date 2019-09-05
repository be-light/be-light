import expressJWT from "../utils/jwt";
import { ResSkeleton, UserOrderList } from "../utils/global.interface";
import { UserOrder } from "../models/user.order.model";
import { Host } from "../models/host.model";
import { HostUser } from "../models/host.user.model";
import { Sequelize } from "sequelize-typescript";

/* Define UserOrder Controller Interface */
interface UserOrderControllerInterface {
  successMsg: ResSkeleton;
  getOrderList(token: string): Promise<UserOrderList[]>;
  requestNewOrder(reqOrder: object, token: string): Promise<ResSkeleton>;
  updateOrder(reqOrder: object): Promise<ResSkeleton>;
  withDrawOrder(pw: string, token: string): Promise<ResSkeleton>;
}

/* UserOrderController */
class UserOrderController implements UserOrderControllerInterface {
  public successMsg: ResSkeleton;

  /* Setting Default successMsg from constructor */
  public constructor() {
    this.successMsg = { status: 200, msg: "success" };
  }

  /* Get UserOrder */
  public getOrderList(token: string): Promise<UserOrderList[]> {
    /* Get UserName, Check-In, Check-Out, 
       Recepit Number, Paid, HostIdx, 
       Host Postal-Code, HostAddress, HostUserPhoneNumber
    */
    return new Promise((resolve, reject) => {
      let userId = expressJWT.verifyToken(token).userId;
      let query = `SELECT
      a.userId as userId,
      a.checkIn as checkin,
      a.checkOut as checkOut,
      a.paid as paid,
      a.reciptNumber as reciptNumber,
      a.HostIdx as hostIdx,
      b.hostAddress as hostaddress,
      b.hostPostalCode as hostPostalCode,
      (select hostUserPhoneNumber from HostUser where hostuserId = b.hostUserId) as hostUserPhoneNumber
    FROM
      UserOrder as a left outer JOIN Host as b
    ON
      a.hostIdx = b.hostIdx
    
    WHERE a.userId = "${userId}"`;

      if (userId) {
        resolve(
          UserOrder.sequelize.query(query, {
            type: Sequelize.QueryTypes.SELECT
          })
        );
      } else {
        reject("Your Token is not valid. or Expired.");
      }
    });
  }

  /* Request New Order */
  public requestNewOrder(
    reqOrder: object,
    token: string
  ): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {
      let userId = expressJWT.verifyToken(token).userId;

      if (userId) {
        UserOrder.create({
          userId: userId,
          checkIn: reqOrder["checkIn"],
          checkOut: reqOrder["checkOut"],
          paid: reqOrder["paid"],
          hostIdx: reqOrder["hostIdx"]
          // TODO: Calculate Paid, Host Mapping Code
        })
          .then(order => {
            resolve(this.successMsg);
          })
          .catch(() => {
            reject("Request New Order Faild.");
          });
      } else {
        reject("Your Token is Expired.");
      }
    });
  }

  /* Update Order */
  public updateOrder(reqOrder: object): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
  }

  /* withDraw Order */
  public withDrawOrder(pw: string, token: string): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
  }
}

export default new UserOrderController();
