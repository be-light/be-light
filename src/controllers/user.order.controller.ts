import expressJWT from "../utils/jwt";
import { ResSkeleton } from "../utils/global.interface";
import { UserOrder } from "../models/user.order.model";

/* Define UserOrder Controller Interface */
interface UserOrderControllerInterface {
  successMsg: ResSkeleton;
  getOrderList(token: string): Promise<UserOrder>[];
  requestNewOrder(reqOrder: object): Promise<ResSkeleton>;
  updateOrder(reqOrder: object): Promise<ResSkeleton>;
  withDrawOrder(pw: string, token: string): Promise<ResSkeleton>;
}

/* UserOrderController */
class UserOrderController {}

export default new UserOrderController();
