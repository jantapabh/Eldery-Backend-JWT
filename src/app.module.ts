import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { ProductModule } from './product/product.module';
import { UploadimageModule } from './uploadimage/uploadimage.module';

@Module({
  imports: [AccountModule, ProductModule, UploadimageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
