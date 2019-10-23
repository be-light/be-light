import "dotenv/config";
import * as FCM from "fcm-node";

/* FCM Controller */
class FCMController {
  public fcm;

  constructor(SERVER_KEY) {
    this.fcm = new FCM(SERVER_KEY);
  }

  public push(deviceToken: string, info: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const msg = {
        to: deviceToken,
        notification: {
          title: "BeLight",
          body: info,
          priority: "high"
        }
      };

      this.fcm.send(msg, (err, res) => {
        if (err) reject("err");
        else resolve(res);
      });
    });
  }
}

export default new FCMController(process.env.FCM_SERVER_KEY);
