import expressJWT from "../utils/jwt";
import { ResSkeleton } from "../utils/global.interface";
import { UserOrder } from "../models/user.order.model";

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
    return new Promise((resolve, reject) => {});
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
          paid: reqOrder["paid"] // TODO: Calculate Paid, Host Mapping Code
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
