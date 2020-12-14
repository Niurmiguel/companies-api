import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import CreateUserDto from '@domain/user/dto/create.dto';
import * as bcrypt from 'bcrypt';
import { IUserRepository } from '@domain/user/user.repository';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/payload.interface';

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class AuthProvider {
  constructor(
    @UserRepo() private readonly _user: IUserRepository,
    private readonly _jwt: JwtService,
    private readonly _config: ConfigService,
  ) {}

  public async register(userData: CreateUserDto) {
    const hashedPass = await bcrypt.hash(userData.password, 10);

    try {
      const createdUser = await this._user.create({
        ...userData,
        password: hashedPass,
      });
      createdUser.password = undefined;
      return createdUser;
    } catch (error) {
      // if (error?.code === PostgresErrorCode.UniqueViolation) {
      //   throw new HttpException(
      //     'User with that email already exists',
      //     HttpStatus.BAD_REQUEST,
      //   );
      // }
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async getAuthenticatedUser(email: string, plainTextPassword: string) {
    try {
      const user = await this._user.getByEmail(email);
      await this.verifyPassword(plainTextPassword, user.password);
      user.password = undefined;
      return user;
    } catch (error) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ) {
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword,
    );
    if (!isPasswordMatching) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public getCookieWithJwtToken(userId: string) {
    const payload: JwtPayload = { userId };
    const token = this._jwt.sign(payload);
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this._config.get(
      'JWT_EXPIRATION_TIME',
    )}`;
  }

  public getCookieForLogOut() {
    return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
  }
}
