import { Inject, Injectable } from '@nestjs/common';
import { Tokens, Users } from './entity/user.entity';
import * as bcrypt from 'bcryptjs';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(
    @Inject('USERS_REPOSITORY') private readonly userRepository: typeof Users,
    @Inject('TOKENS_REPOSITORY') private readonly tokensRepository: typeof Tokens,
    ) { }

  // Service ( 1 ). หาข้อมูล User คนเดียว 
  async find_one(datatype: string, data: string) {
    let result = await this.userRepository.scope({}).findOne({
      where: { [`${datatype}`]: data },
      raw: true
    });
    return result;
  }

  // Service ( 2 ). เข้ารหัสผ่านเข้าสู่ระบบ
  async uncoder_password(password: string) {
    var salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  // Service ( 3 ). สร้างบัญชีลงฐานข้อมูล
  async create_user(user: any) {
    let result = [];
    // - - - Start - - - เงื่อนไขเมื่อกรอกข้อมูลไม่ครบ
    if (user.username.length < 4) {
      result.push({ alert_username: 'username must be longer than 4' })
    }
    if (user.password.length < 6) {
      result.push({ alert_password: 'password must be longer than 6' })
    }
    if (await this.find_one('username', user.username)) {
      result.push({ alert_h_username: 'already have this username' }) // h ย่อมาจาก Have แสดงว่ามี username นี้แล้ว
    }
    if (await this.find_one('email', user.email)) {
      result.push({ alert_h_email: 'already have this email' }) // h ย่อมาจาก Have แสดงว่ามี email นี้แล้ว
    }
    if (result.length > 0) {
      return result;
    }
    // - - - End - - - เงื่อนไขเมื่อกรอกข้อมูลไม่ครบ
    user.password = await this.uncoder_password(user.password);
    user.role = 0;
    await this.userRepository.create(user);
    return { message: 'create user succeed' };

  }

  // Service ( 4 ). เก็บ Token ของแต่ละ User
  async addToken(user: any, access_token: string) {
    user = await this.find_one('username', user.username);
    console.log(user)
    if (!user) return { error: 'User not found' };
    const new_token = {
      user_id: user.user_id,
      token: access_token
    }
    return await this.tokensRepository.create(new_token)
  }


}