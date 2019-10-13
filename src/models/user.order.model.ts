import {
  Model,
  Column,
  Table,
  PrimaryKey,
  Unique,
  AutoIncrement
} from "sequelize-typescript";

@Table
export class UserOrder extends Model<UserOrder> {
  @Column
  public userId!: string;

  @Column
  public checkIn!: Date;

  @Column
  public checkOut!: Date;

  @Column
  public paid!: number;

  @Column
  public hostIdx!: string;

  @Column
  public gHostIdx!: string;

  @Column
  public itemCount!: number;

  @Column
  public statusCode!: number;

  @PrimaryKey
  @AutoIncrement
  @Column
  public reciptNumber!: number;
}
