import {
  Model,
  Column,
  Table,
  PrimaryKey,
  Unique,
  AutoIncrement
} from "sequelize-typescript";

@Table
export class UserReview extends Model<UserReview> {
  @Column
  public userId!: string;

  @Column
  public hostIdx!: string;

  @Column
  public review!: string;

  @Column
  public reviewScore!: number;

  @Column
  public reviewDate!: Date;

  @PrimaryKey
  @AutoIncrement
  @Column
  public reviewNumber!: number;
}
