import "dotenv/config";
import app from "./app";

const PORT: any = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express Server Listening on Port ${PORT}`);
});
