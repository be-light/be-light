import "dotenv/config";
import * as FCM from "fcm-node";

/* FCM Controller */
export class FCMController {
  public fcm;

  constructor() {
    this.fcm = new FCM(process.env.FCM_SERVER_KEY);
  }

  public push(deviceToken: string, info: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const msg = {
        to: deviceToken,
        notification: {
          title: "FCM-NODE",
          body: info
        }
      };

      this.fcm.send(msg, (err, res) => {
        if (err) {
          console.log(err);
          reject("err");
        } else {
          console.log(res);
          resolve(res);
        }
      });
    });
  }
}
