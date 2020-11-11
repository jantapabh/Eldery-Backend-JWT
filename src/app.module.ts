import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    AccountModule,
    ProductModule,
    AuthModule,
    UsersModule,
    FilesModule,
    MulterModule.register({
      dest: './uploads',
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
