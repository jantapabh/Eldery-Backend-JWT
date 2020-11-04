import {Sequelize} from 'sequelize-typescript';
import { Products } from '../product/entitys/product.entity';

export const databaseProviders = [
    {
      provide: 'SEQUELIZE',
      useFactory: async () => {
        const sequelize = new Sequelize({
          dialect: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '1234',
          database: 'cryptopg',
        });
        sequelize.addModels([Products]);
        await sequelize.sync();
        return sequelize;
      },
    },
  ];