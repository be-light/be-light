import expressJWT from "../utils/jwt";
import { ResSkeleton, HostSkeleton } from "../utils/global.interface";
import { Host } from "../models/host.model";

/* Define Host Controller Interface */
interface HostControllerInterface {
  successMsg: ResSkeleton;
  getAllHost(token: string): Promise<HostSkeleton[]>;
  addNewHost(token: string): Promise<ResSkeleton>;
  updateHost(token: string, idx: number): Promise<ResSkeleton>;
  withDrawHost(pw: string, token: string): Promise<ResSkeleton>;
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
    return new Promise((resolve, reject) => {});
  }

  /* Add New Host */
  public addNewHost(token: string): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
  }

  /* Update Host Information */
  public updateHost(token: string, idx: number): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
  }

  /* With Draw Host */
  public withDrawHost(pw: string, token: string): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
  }
}

export default new HostController();
