import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from './user.entity';
import { UserRepoProvider } from './user.persistence.provider';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserRepoProvider],
  exports: [UserRepoProvider],
})
export class UserRepositoryModule {}
