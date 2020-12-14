import {
  Body,
  Req,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  Res,
  Get,
} from '@nestjs/common';
import CreateUserDto from '@domain/user/dto/create.dto';
import { AuthProvider } from './auth.provider';
import { LocalAuthGuard } from './guards/local-auth.guard';
import JwtAuthGuard from './guards/jwt.guard';
import RequestWithUser from './interfaces/requestWithUser.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly _auth: AuthProvider) {}

  @Post('register')
  async register(@Body() userData: CreateUserDto) {
    return this._auth.register(userData);
  }

  // @HttpCode(200)
  // @UseGuards(LocalAuthGuard)
  // @Post('log-in')
  // async logIn(@Req() request: RequestWithUser, @Res() res: Response) {
  //   const { user } = request;
  //   const cookie = this._auth.getCookieWithJwtToken(user.id);
  //   res.headers.set('Set-Cookie', cookie);
  //   user.password = undefined;
  //   return user;
  // }

  // @UseGuards(JwtAuthGuard)
  // @Post('log-out')
  // async logOut(@Req() req: RequestWithUser, @Res() res: Response) {
  //   res.headers.set('Set-Cookie', this._auth.getCookieForLogOut());
  //   return [];
  // }

  @UseGuards(JwtAuthGuard)
  @Get()
  authenticate(@Req() request: RequestWithUser) {
    return request.user;
  }
}
