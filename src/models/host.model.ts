import {
  Model,
  Column,
  Table,
  PrimaryKey,
  Unique,
  AutoIncrement
} from "sequelize-typescript";

@Table
export class Host extends Model<Host> {
  @AutoIncrement
  @PrimaryKey
  @Column
  public hostIdx!: number;

  @Column
  public hostUserId!: string;

  @Column
  public hostName!: string;

  @Column
  public hostTel!: string;

  @Column
  public hostAddress!: string;

  @Column
  public hostPostalCode!: string;

  @Column
  public hostLatitude!: string;

  @Column
  public hostLongitude!: string;

  @Column
  public hostIntro!: string;
}
