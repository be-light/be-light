import "dotenv/config";
import app from "./app";
import sequelize from "./sequelize";

/* Setting Server Port */
const PORT: any = process.env.SERVER_PORT || 3000;

/* Sequelize Sync */
async () => {
  await sequelize.sync({ force: true });
};

/* Server Start */
app.listen(PORT, () => {
  console.log(`Express Server Listening on Port ${PORT}`);
});
