import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { JwtPayload } from '@auth/interfaces/payload.interface';
import { IUserRepository } from '@domain/user/user.repository';

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly _config: ConfigService,
    @UserRepo() private readonly _user: IUserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.cookies?.Authentication;
        },
      ]),
      secretOrKey: _config.get('JWT_SECRET'),
    });
  }

  async validate(payload: JwtPayload) {
    return this._user.getById(payload.userId);
  }
}
