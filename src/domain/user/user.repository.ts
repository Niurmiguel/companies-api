import CreateUserDto from './dto/create.dto';

export interface IUserRepository {
  getByEmail(email: string);
  getById(userId: string);
  create(userData: CreateUserDto): Promise<CreateUserDto>;
  setCurrentRefreshToken(refreshToken: string, userId: string);
  getUserIfRefreshTokenMatches(refreshToken: string, userId: string);
  removeRefreshToken(userId: string);
}
