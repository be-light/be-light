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
