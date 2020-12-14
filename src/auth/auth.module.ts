import { UserModule } from '@domain/user/user.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserRepositoryModule } from '@persistence/user/user.repository.module';
import { AuthController } from './auth.controller';
import { AuthProvider } from './auth.provider';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    UserRepositoryModule,
    PassportModule,
    ConfigModule,
    JwtModule.register({}),
  ],
  providers: [AuthProvider, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
