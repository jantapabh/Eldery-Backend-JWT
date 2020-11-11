import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './entity/user.providers';

@Module({
  providers: [UsersService,...usersProviders],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
