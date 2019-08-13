import "dotenv/config";
import app from "./app";
import sequelize from "./models/sequelize";

/* Setting Server Port */
const PORT: any = process.env.SERVER_PORT || 3000;

/* Sequelize Sync */
sequelize.sync({ force: false });

/* Server Start */
app.listen(PORT, () => {
  console.log(`Express Server Listening on Port ${PORT}`);
});
