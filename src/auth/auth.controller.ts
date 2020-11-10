import { Body, Controller, HttpStatus, Post, Request, Res, UseGuards, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local/local-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    // 1. สมัครบัญชี
    @Post('signup')
    async register(
        @Body('firstname') firstname,
        @Body('lastname') lastname,
        @Body('phoneNumber') phoneNumber,
        @Body('email') email,
        @Body('username') username,
        @Body('password') password,
        @Body('address') address,
        @Res() Res
    ) {
        let result = await this.authService.signup({firstname,lastname,phoneNumber,email,username,password,address})
        return Res.status(HttpStatus.OK).json(result) ;
    }

    // 2. เข้าสู่ระบบแล้วจะได้ Token 
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

}
