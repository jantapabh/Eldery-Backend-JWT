import { Controller, Get , Request, Post, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/JWT/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private authService:AuthService) {}

  
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  
}
