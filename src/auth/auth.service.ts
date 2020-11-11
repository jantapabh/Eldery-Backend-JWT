import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
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

  // Service ( 1 ). ทำหน้าที่สมัครแล้วเพิ่มลงใน Database 
  async signup(user: any) {
    const result = await this.usersService.create_user(user); // ส่งไปทำในที่ User
    return result;
  }

  // Service ( 2 ). เข้าสู่ระบบโดยเช็คว่าเป็น Email หรือ Username
  async signin(accountuser: string, password: string) {
    const accountType = await this.checkTypeAccount(accountuser);
    switch (accountType) {
      case ACCOUNT_TYPE.EMAIL:
        return await this.signinEmail(accountuser, password);
      case ACCOUNT_TYPE.USERNAME:
        return await this.signinUsername(accountuser, password);
    }

  }

  // Service ( 3 ). เข้าระบบด้วย Username
  async signinUsername(username: string, password: string) {
    const user = await this.usersService.find_one('username', username);
    if (user) {
      if (user && bcrypt.compareSync(password, user.password)) {
        const { password, ...result } = user;
        return this.generateToken(result);
      }
      else {
        throw new UnauthorizedException();
      }
    }
    else {
      throw new UnauthorizedException();
    }

  }

  // Service ( 4 ). เข้าระบบด้วย Email
  async signinEmail(email: string, password: string) {
    const user = await this.usersService.find_one('email', email);
    if (user) {
      if (user && bcrypt.compareSync(password, user.password)) {
        const { password, ...result } = user;
        return this.generateToken(result);
      }
      else {
        throw new UnauthorizedException();
      }
    }
    else {
      throw new UnauthorizedException();
    }

  }


  // Function ( 1 ) เอาไว้หาว่า เข้าสู่ระบบด้วย Username หรือ Email
  async checkTypeAccount(accountuser: string) {
    let accountArray = accountuser.split('');
    let typeAccount = accountArray.find(item => {
      return item == '@';
    })
    return typeAccount != undefined ? ACCOUNT_TYPE.EMAIL : ACCOUNT_TYPE.USERNAME;
  }

  // Function ( 2 ) สร้าง Token
  private async generateToken(user: any) {
    const payload = {
      username: user.username,
      sub : user.user_id,
      email:user.email,
      address : user.address,
      phone : user.phoneNumber,
      firstname : user.firstname,
      lastname : user.lastname,
      role : user.role,
    }
    const token = await this.jwtService.sign(payload);
    await this.usersService.addToken(user,token);
    return {access_token:token,payload};
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