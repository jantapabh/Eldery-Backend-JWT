
import { Table, Column, Model, AutoIncrement, PrimaryKey } from 'sequelize-typescript';

@Table
export class UploadImage extends Model<UploadImage>{

    @PrimaryKey
    @AutoIncrement
    @Column
    p_id:number;

    @Column
    name: string;

    @Column
    fieldname: string;

    @Column
    originalname: string;

    @Column
    encoding: string;

    @Column
    mimetype: string;


}