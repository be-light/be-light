import { Sequelize, DataType, Unique, AllowNull } from "sequelize-typescript";
import "dotenv/config";
import { User } from "./user.model";
import { Host } from "./host.model";
import { HostUser } from "./host.user.model";
import { UserOrder } from "./user.order.model";

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
sequelize.addModels([User, Host, HostUser, UserOrder]);

/* define models */
const user = sequelize.define(
  "User",
  {
    userId: {
      type: DataType.STRING,
      primaryKey: true
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

const hostUser = sequelize.define("HostUser", {
  hostUserId: {
    type: DataType.STRING,
    primaryKey: true
  },
  hostUserPassword: {
    type: DataType.STRING
  },
  hostUserName: {
    type: DataType.STRING
  },
  hostUserEmail: {
    type: DataType.STRING
  },
  hostUserPhoneNumber: {
    type: DataType.STRING
  }
});

const host = sequelize.define("Host", {
  idx: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  hostUserId: {
    type: DataType.STRING
  },
  hostPassword: {
    type: DataType.STRING
  },
  hostName: {
    type: DataType.STRING
  },
  hostTel: {
    type: DataType.STRING
  },
  hostAddress: {
    type: DataType.STRING
  },
  hostPostalCode: {
    type: DataType.STRING
  }
});

const userOrder = sequelize.define("UserOrder", {
  userId: {
    type: DataType.STRING
  },
  checkIn: {
    type: DataType.DATE
  },
  checkOut: {
    type: DataType.DATE
  },
  paid: {
    type: DataType.INTEGER
  },
  reciptNumber: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

/* associate settings*/
host.belongsTo(hostUser, {
  foreignKey: "hostUserId"
});

userOrder.belongsTo(user, {
  foreignKey: "userId"
});

userOrder.belongsTo(host, {
  foreignKey: "hostName"
});

/* export */

export default sequelize;
