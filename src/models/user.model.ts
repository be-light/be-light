import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  Unique,
  AutoIncrement,
  NotNull
} from "sequelize-typescript";

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Unique
  @AutoIncrement
  @Column
  public idx!: number;

  @Unique
  @NotNull
  @Column
  public userId!: string;

  @NotNull
  @Column
  public userPassword!: string;

  @NotNull
  @Column
  public userName!: string;

  @NotNull
  @Column
  public userEmail!: string;

  @NotNull
  @Column
  public userPhoneNumber!: string;

  @NotNull
  @Column
  public userAddress!: string;

  @CreatedAt
  @Column
  public readonly createdAt!: Date;

  @UpdatedAt
  @Column
  public readonly updatedAt!: Date;
}
