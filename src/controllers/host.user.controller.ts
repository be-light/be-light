import expressJWT from "../utils/jwt";
import { ResSkeleton, ResponseUser } from "../utils/global.interface";
import { HostUser } from "../models/host.user.model";

interface HostUserControllerInterface {
  successMsg: ResSkeleton;
  login(id: string, pw: string): Promise<ResponseUser>;
  register(reqHost: object): Promise<ResSkeleton>;
  bringHostProfile(token: string): Promise<ResponseUser>;
  updateHostProfile(reqHost: object, token: string): Promise<ResSkeleton>;
  hostWithDraw(pw: string, token: string): Promise<ResSkeleton>;
}

/* Host User Controller */
class HostUserController implements HostUserControllerInterface {
  public successMsg: ResSkeleton;

  public costructor() {
    this.successMsg = { status: 200, msg: "success" };
  }

  public login(id: string, pw: string): Promise<ResponseUser> {
    return new Promise((resolve, reject) => {});
  }

  public register(reqHost: object): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
  }

  public bringHostProfile(token: string): Promise<ResponseUser> {
    return new Promise((resolve, reject) => {});
  }

  public updateHostProfile(reqHost: object, tok: string): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
  }

  public hostWithDraw(pw: string, token: string): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
  }
}
