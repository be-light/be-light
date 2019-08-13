import {
  Model,
  Column,
  Table,
  PrimaryKey,
  Unique,
  AutoIncrement
} from "sequelize-typescript";

@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  public idx!: number;

  @Unique
  @Column
  public userId!: string;

  @Column
  public userPassword!: string;

  @Column
  public userName!: string;

  @Column
  public userEmail!: string;

  @Column
  public userPhoneNumber!: string;

  @Column
  public userAddress!: string;
}
