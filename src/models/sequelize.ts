import { Sequelize, DataType, Unique, AllowNull } from "sequelize-typescript";
import "dotenv/config";
import { User } from "./user.model";

/* sequelize-typescript config */
const config = {
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  dialect: process.env.MYSQL_DIALECT,
  modelPaths: [__dirname + "/models"],
  modelMatch: (filename, member) => {
    return (
      filename.substring(0, filename.indexOf(".model")) === member.toLowerCase()
    );
  }
};

/* create sequelize instance */
const sequelize: Sequelize = new Sequelize(config);
sequelize.addModels([User]);
/* define models */
sequelize.define(
  "User",
  {
    idx: {
      type: DataType.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataType.STRING,
      unique: true
    },
    userPassword: {
      type: DataType.STRING
    },
    userName: {
      type: DataType.STRING
    },
    userEmail: {
      type: DataType.STRING
    },
    userPhoneNumber: {
      type: DataType.STRING
    },
    userAddress: {
      type: DataType.STRING
    }
  },
  { timestamps: false, paranoid: false }
);

/* export */

export default sequelize;
