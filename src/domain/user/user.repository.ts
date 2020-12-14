import CreateUserDto from './dto/create.dto';

export interface IUserRepository {
  getByEmail(email: string);
  getById(userId: string);
  create(userData: CreateUserDto): Promise<CreateUserDto>;
}
