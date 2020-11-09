import { Sequelize } from 'sequelize-typescript';
import { Users } from 'src/users/entity/user.entity';
import { Products } from '../product/entitys/product.entity';
import { UploadImage } from '../uploadimage/entity/uploadimage.entity'

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
      sequelize.addModels([Products, UploadImage , Users]);
      await sequelize.sync();
      return sequelize;
    },
  },
];