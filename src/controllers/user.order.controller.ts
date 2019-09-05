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
  updateOrder(reqOrder: object, token: string): Promise<ResSkeleton>;
  withDrawOrder(token: string, reciptNumber: number): Promise<ResSkeleton>;
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
       Host Postal-Code, HostAddress, HostUserPhoneNumber, HostName
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
      b.hostName as hostName,
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

  /* Update Order*/
  public updateOrder(reqOrder: object, token: string): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {
      let userId: string = expressJWT.verifyToken(token).userId;

      if (userId) {
        UserOrder.update(
          {
            checkIn: reqOrder["checkIn"],
            checkOut: reqOrder["checkOut"]
          },
          {
            where: {
              userId: userId,
              reciptNumber: reqOrder["reciptNumber"]
            },
            returning: false
          }
        )
          .then(update => {
            resolve(this.successMsg);
          })
          .catch(() => {
            reject("Your Request Faild.");
          });
      } else {
        reject("Your Token is not valid. or Expired.");
      }
    });
  }

  /* withDraw Order */
  public withDrawOrder(
    token: string,
    reciptNumber: number
  ): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {
      let userId: string = expressJWT.verifyToken(token).userId;
      if (userId) {
        UserOrder.destroy({
          where: {
            reciptNumber,
            userId
          }
        })
          .then(result => {
            resolve(this.successMsg);
          })
          .catch(msg => {
            reject("Your Permission Denied.");
          });
      } else {
        reject("Your Token is not valid. or Expired.");
      }
    });
  }
}

export default new UserOrderController();
