import * as express from "express";
import { Request, Response } from "express";
import "dotenv/config";

const PORT: any = process.env.SERVER_PORT || 3000;
const app: express.Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript + Webpack");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${process.env.SERVER_PORT}`);
});
