import {
  Model,
  Column,
  Table,
  PrimaryKey,
  Unique,
  AutoIncrement
} from "sequelize-typescript";

@Table
export class HostUser extends Model<HostUser> {
  @PrimaryKey
  @Column
  public hostUserId!: string;

  @Column
  public hostUserPassword!: string;

  @Column
  public hostUserName!: string;

  @Column
  public hostUserEmail!: string;

  @Column
  public hostUserPhoneNumber!: string;
}
