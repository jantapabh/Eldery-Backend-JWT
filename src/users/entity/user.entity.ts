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