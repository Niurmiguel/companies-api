import CreateUserDto from '@domain/user/dto/create.dto';
import { IUserRepository } from '@domain/user/user.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserEntity from './user.entity';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly _user: Repository<UserEntity>,
  ) {}

  public async create(userData: CreateUserDto): Promise<CreateUserDto> {
    const newUser = await this._user.create(userData);
    await this._user.save(newUser);
    return newUser;
  }

  public async getByEmail(email: string) {
    const user = await this._user.findOne({ email });
    if (user) return user;

    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  public async getById(userId: string) {
    const user = await this._user.findOne({ id: userId });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }
}
