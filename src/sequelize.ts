import { Sequelize } from "sequelize-typescript";
import "dotenv/config";

const config = {
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  dialect: process.env.MYSQL_DIALECT,
  modelsPaths: [__dirname + "./models/*.ts"],
  modelMatch: (filename, member) => {
    return (
      filename.substring(0, filename.indexOf(".model")) === member.toLowerCase()
    );
  }
};
const sequelize: Sequelize = new Sequelize(config);

export default sequelize;
