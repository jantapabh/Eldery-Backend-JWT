import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Products extends Model<Products> {
  @Column
  name: string;

  @Column
  count: number;

  @Column
  price: number;
}