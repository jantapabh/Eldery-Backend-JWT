import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { productsProviders} from './entitys/product.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [ProductController],
  providers: [ProductService,...productsProviders]
})
export class ProductModule {}
