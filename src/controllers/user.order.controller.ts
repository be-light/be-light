import expressJWT from "../utils/jwt";
import { ResSkeleton } from "../utils/global.interface";
import { UserOrder } from "../models/user.order.model";

/* Define UserOrder Controller Interface */
interface UserOrderControllerInterface {
  successMsg: ResSkeleton;
  getOrderList(token: string): Promise<UserOrder>;
  requestNewOrder(reqOrder: object): Promise<ResSkeleton>;
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
  public getOrderList(token: string): Promise<UserOrder> {
    return new Promise((resolve, reject) => {});
  }

  /* Request New Order */
  public requestNewOrder(reqOrder: object): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
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
