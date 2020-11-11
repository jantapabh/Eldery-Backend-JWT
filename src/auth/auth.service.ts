import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from  'bcryptjs';
enum ACCOUNT_TYPE {
  EMAIL,
  USERNAME,
  ADMIN,
}


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  // 1. ทำหน้าที่สมัครแล้วเพิ่มลงใน Database 
  async signup(user: any) {
    const result = await this.usersService.create_user(user); // ส่งไปทำในที่ User
    return result;
  }


  async signin(accountuser: string, password: string) {
    const accountType =await this.checkTypeAccount(accountuser);
    switch (accountType) {
      case ACCOUNT_TYPE.EMAIL:
        return "email"
      case ACCOUNT_TYPE.USERNAME:
        return await this.signinUsername(accountuser,password);
    }

  }

  async signinUsername(username : string , password : string ){
    const user = await this.usersService.find_one('username',username);
    if(user){
      if(user && bcrypt.compareSync(password,user.password) ){
        const {password, ...result} = user;
        return result
      }
      else{
        throw new UnauthorizedException();
      }
    }
    else{
      throw new UnauthorizedException();
    }
    
  }

  async signinEmail(email : string , password : string ){

  }

  async checkTypeAccount(accountuser: string) {
    let accountArray = accountuser.split('');
    let typeAccount = accountArray.find(item => {
      return item == '@';
    })
    return typeAccount != undefined ? ACCOUNT_TYPE.EMAIL : ACCOUNT_TYPE.USERNAME;
  }

  async validateUser(username: string, pass: string): Promise<any> {
    // const user = await this.usersService.findOne(username);
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    // return null;
  }

  // async login(user: any) {
  //   const payload = { username: user.username, sub: user.userId };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }



}