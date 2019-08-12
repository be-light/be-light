import { Sequelize, DataType, Unique, AllowNull } from "sequelize-typescript";
import "dotenv/config";

/* sequelize-typescript config */
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

/* create sequelize instance */
const sequelize: Sequelize = new Sequelize(config);

/* define models */
sequelize.define(
  "User",
  {
    idx: {
      type: DataType.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    userId: {
      type: DataType.STRING,
      allowNull: false,
      unique: true
    },
    userPassword: {
      type: DataType.STRING,
      allowNull: false
    },
    userName: {
      type: DataType.STRING,
      allowNull: false
    },
    userEmail: {
      type: DataType.STRING,
      allowNull: false
    },
    userPhoneNumber: {
      type: DataType.STRING,
      allowNull: false
    },
    userAddress: {
      type: DataType.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataType.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataType.DATE,
      allowNull: false
    }
  },
  { timestamps: true, paranoid: true }
);

/* export */
const db = <any>{};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
