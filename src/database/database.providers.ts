import { Sequelize } from 'sequelize-typescript';
import { Tokens, Users } from 'src/users/entity/user.entity';
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
        database: 'cpg_database',
      });
      sequelize.addModels([Products , Users,Tokens]);
      await sequelize.sync();
      return sequelize;
    },
  },
];