import expressJWT from "../utils/jwt";
import { ResSkeleton, HostSkeleton } from "../utils/global.interface";
import { Host } from "../models/host.model";

/* Define Host Controller Interface */
interface HostControllerInterface {
  successMsg: ResSkeleton;
  getAllHost(token: string): Promise<HostSkeleton[]>;
  addNewHost(token: string, hostObj: object): Promise<ResSkeleton>;
  updateHost(token: string, idx: number, hostObj: object): Promise<ResSkeleton>;
  withDrawHost(idx: number, token: string): Promise<ResSkeleton>;
}

/* HostController */
class HostController implements HostControllerInterface {
  public successMsg: ResSkeleton;

  /* Setting Default successMsg from constructor */
  public constructor() {
    this.successMsg = { status: 200, msg: "success" };
  }

  /* Get All Host Information */
  public getAllHost(token: string): Promise<HostSkeleton[]> {
    return new Promise((resolve, reject) => {
      let hostUserId = expressJWT.verifyToken(token).userId;
      if (hostUserId) {
        Host.findAll({
          where: {
            hostUserId
          },
          attributes: {
            exclude: ["hostUserId"]
          }
        }).then(host => {
          resolve(host);
        });
      } else {
        reject("Your Token is not valid. or Expired.");
      }
    });
  }

  /* Add New Host */
  public addNewHost(token: string, hostObj: object): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {
      let hostUserId = expressJWT.verifyToken(token).userId;

      if (hostUserId) {
        Host.create({
          hostUserId: hostUserId,
          hostName: hostObj["hostName"],
          hostTel: hostObj["hostTel"],
          hostAddress: hostObj["hostAddress"],
          hostPostalCode: hostObj["hostPostalCode"]
        }).then(host => {
          resolve(this.successMsg);
        });
      } else {
        reject("Your Token is not valid. or Expired.");
      }
    });
  }

  /* Update Host Information */
  public updateHost(
    token: string,
    idx: number,
    hostObj: object
  ): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {
      let hostUserId = expressJWT.verifyToken(token).userId;
      if (hostUserId) {
        Host.update(
          {
            hostName: hostObj["hostName"],
            hostTel: hostObj["hostTel"],
            hostAddress: hostObj["hostAddress"],
            hostPostalCode: hostObj["hostPostalCode"]
          },
          {
            where: {
              idx
            },
            returning: false
          }
        )
          .then(msg => {
            resolve(this.successMsg);
          })
          .catch(() => {
            reject("Request is not valid.");
          });
      } else {
        reject("Your Token is not valid. or Expired.");
      }
    });
  }

  /* With Draw Host */
  public withDrawHost(idx: number, token: string): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {
      let hostUserId = expressJWT.verifyToken(token).userId;
      if (hostUserId) {
        Host.destroy({
          where: {
            idx,
            hostUserId
          }
        }).then(result => {
          resolve(this.successMsg);
        });
      } else {
        reject("Your token is not valid. or Expired.");
      }
    });
  }
}

export default new HostController();
