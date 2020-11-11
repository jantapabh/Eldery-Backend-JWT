import { Sequelize } from 'sequelize';
import {  DOUBLE } from 'sequelize';
import { Table, Column, Model, AutoIncrement, PrimaryKey, DataType, AllowNull } from 'sequelize-typescript';

@Table
export class Products extends Model<Products> {

  @PrimaryKey
  @AutoIncrement
  @Column
  p_id:number;

  @Column(DataType.STRING(2500)) 
  name: string;

  @Column({type:DOUBLE })
  price: number;

  @AllowNull(true)
  @Column
  size: string;

  @AllowNull(true)
  @Column
  qtystock: number;

  @Column
  category: string;

  @AllowNull(true)
  @Column
  brand: string;

  @AllowNull(true)
  @Column
  detail: string;

}

