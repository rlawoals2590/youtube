import { Controller, Res, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/auth-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() body: LoginUserDto, @Res() Response){
    const user = body;
    const cookie = await this.authService.login(user);
    Response.setHeader('Set-Cookie', cookie);
    return Response.send(user);
  }
}
