import { Injectable, Inject } from '@nestjs/common';
import CreateUserDto from './dto/create.dto';
import { IUserRepository } from './user.repository';

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class Create {
  constructor(@UserRepo() private readonly _user: IUserRepository) {}

  public async create(userData: CreateUserDto): Promise<void> {
    await this._user.create(userData);
  }
}
