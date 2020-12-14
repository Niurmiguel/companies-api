import { Strategy } from 'passport-local';
import { AuthProvider } from '@auth/auth.provider';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import UserEntity from '@persistence/user/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _auth: AuthProvider) {
    super();
  }

  async validate(email: string, password: string): Promise<UserEntity> {
    return this._auth.getAuthenticatedUser(email, password);
  }
}
