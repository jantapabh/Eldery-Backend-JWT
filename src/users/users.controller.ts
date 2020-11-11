import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService : UsersService){}

    @Get('/:username')
    getUserByUsername(@Param('username') username:string){
        return this.usersService.find_one({type:'username'},username);
    }

    @Get('/:email')
    getUserByEmail(@Param('email') email:string){
        return this.usersService.find_one({type:'email'},email);
    }

}
