import { Inject, Injectable } from '@nestjs/common';
import { Users } from './entity/user.entity';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(@Inject('USERS_REPOSITORY') private readonly userRepository:typeof Users) {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async find_one(datatype:string, data:string){
    let result = await this.userRepository.scope({}).findOne({
      where:{[`${datatype}`]:data},
      raw:true
    });
    return result;
  }

  async create_user(user: any) {
    let result = [];
    // - - - Start - - - เงื่อนไขเมื่อกรอกข้อมูลไม่ครบ
    if (user.username.length < 4) {
      result.push({ alert_username: 'username must be longer than 4' })
    }
    if (user.password.length < 6) {
      result.push({ alert_password: 'password must be longer than 6' })
    }
    if(await this.find_one('username',user.username)){
      result.push({alert_h_username:'already have this username'}) // h ย่อมาจาก Have แสดงว่ามี username นี้แล้ว
    }
    if(await this.find_one('email',user.email)){
      result.push({alert_h_email:'already have this email'}) // h ย่อมาจาก Have แสดงว่ามี email นี้แล้ว
    }
    if(result.length > 0){
      return result;
    }
    // - - - End - - - เงื่อนไขเมื่อกรอกข้อมูลไม่ครบ
    user.role=0;
    await this.userRepository.create(user);
    return { message: 'create user succeed' };

  }


}