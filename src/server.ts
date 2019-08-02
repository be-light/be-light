import "dotenv/config";
import app from "./app";

/* Setting Server Port */
const PORT: any = process.env.SERVER_PORT || 3000;

/* Server Start */
app.listen(PORT, () => {
  console.log(`Express Server Listening on Port ${PORT}`);
});
