import {
    AllowNull,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    Table,
    Unique,
    HasMany,
    ForeignKey,
    BelongsTo,
    DataType,
} from 'sequelize-typescript';
@Table({
    timestamps: true,
    paranoid: true,
})
export class Users extends Model<Users> {
    @AllowNull(false)
    @PrimaryKey
    @AutoIncrement
    @Column
    user_id: number;

    @AllowNull(false)
    @Unique
    @Column
    username: string;

    @AllowNull(true)
    @Unique
    @Column
    photo: string;

    @AllowNull(false)
    @Unique
    @Column
    email: string;

    @AllowNull(false)
    @Column
    password: string;

    @AllowNull(true)
    @Column
    firstname: string;

    @AllowNull(true)
    @Column
    lastname: string;

    @AllowNull(true)
    @Column
    address: string;

    @AllowNull(true)
    @Column
    phoneNumber: string;

    @AllowNull(true)
    @Column
    role: number;

}


@Table({
    timestamps: false,
    paranoid: false,
  })
export class Tokens extends Model<Tokens> {
    @AllowNull(false)
    @PrimaryKey
    @AutoIncrement
    @Column
    token_id: number;
  
    @AllowNull(false)
    @Column(DataType.STRING(2500))
    token: string;
  
    @AllowNull(false)
    @ForeignKey(() => Users)
    @Column
    user_id: number;
  }
  