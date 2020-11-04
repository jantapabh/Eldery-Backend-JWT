import { Sequelize } from 'sequelize';
import { DataTypes, DOUBLE } from 'sequelize';
import { Table, Column, Model, AutoIncrement, PrimaryKey } from 'sequelize-typescript';

@Table
export class Products extends Model<Products> {
  
  @PrimaryKey
  @AutoIncrement
  @Column
  p_id:number;

  @Column
  name: string;

  @Column({type:DOUBLE})
  price: number;

  @Column
  size: string ;

  @Column
  qtystock: number;

  @Column
  category: string;

  @Column
  brand: string;

  @Column
  detail: string;

}