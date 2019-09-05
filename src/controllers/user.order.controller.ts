import expressJWT from "../utils/jwt";
import { ResSkeleton } from "../utils/global.interface";
import { UserOrder } from "../models/user.order.model";
import { Host } from "../models/host.model";
import { HostUser } from "../models/host.user.model";

/* Define UserOrder Controller Interface */
interface UserOrderControllerInterface {
  successMsg: ResSkeleton;
  getOrderList(token: string): Promise<UserOrder[]>;
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
  public getOrderList(token: string): Promise<UserOrder[]> {
    /* Get UserName, Check-In, Check-Out, 
       Recepit Number, Paid, HostIdx, 
       Host Postal-Code, HostAddress, HostUserPhoneNumber
    */
    return new Promise((resolve, reject) => {
      let userId = expressJWT.verifyToken(token).userId;
      if (userId) {
        UserOrder.findAll({
          where: {
            userId
          },
          include: [
            {
              model: Host,
              attributes: ["HostPostalCode", "HostAddress"]
            },
            {
              model: HostUser,
              attributes: ["HostUserPhoneNumber"]
            }
          ]
        }).then(order => {
          resolve(order);
        });
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
