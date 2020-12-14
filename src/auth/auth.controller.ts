import {
  Body,
  Req,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  Get,
  Inject,
} from '@nestjs/common';
import CreateUserDto from '@domain/user/dto/create.dto';
import { AuthProvider } from './auth.provider';
import { LocalAuthGuard } from './guards/local-auth.guard';
import JwtAuthGuard from './guards/jwt.guard';
import RequestWithUser from './interfaces/requestWithUser.interface';
import { IUserRepository } from '@domain/user/user.repository';

const UserRepo = () => Inject('UserRepo');

@Controller('auth')
export class AuthController {
  constructor(
    private readonly _auth: AuthProvider,
    @UserRepo() private readonly _user: IUserRepository,
  ) {}

  @Post('register')
  async register(@Body() userData: CreateUserDto) {
    return this._auth.register(userData);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('log-in')
  async logIn(@Req() request: RequestWithUser) {
    const { user } = request;
    const cookie = this._auth.getCookieWithJwtToken(user.id);
    const {
      cookie: refreshTokenCookie,
      token: refreshToken,
    } = this._auth.getCookieWithJwtRefreshToken(user.id);

    await this._user.setCurrentRefreshToken(refreshToken, user.id);
    request.res.setHeader('Set-Cookie', [cookie, refreshTokenCookie]);
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Post('log-out')
  async logOut(@Req() req: RequestWithUser) {
    await this._user.removeRefreshToken(req.user.id);
    req.res.setHeader('Set-Cookie', this._auth.getCookiesForLogOut());
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  authenticate(@Req() request: RequestWithUser) {
    return request.user;
  }
}
