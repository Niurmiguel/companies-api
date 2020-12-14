import { Test } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { getRepositoryToken } from '@nestjs/typeorm';
import mockedJwtService from '../../utils/mocks/jwt.service';
import mockedConfigService from '../../utils/mocks/config.service';
import { AuthProvider } from '../auth.provider';
import UserEntity from '../../persistence/user/user.entity';
import { UserRepository } from '../../persistence//user/repository';

describe('The AuthProvider', () => {
  let authProvider: AuthProvider;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UserRepository,
        AuthProvider,
        {
          provide: 'UserRepo',
          useValue: UserEntity,
        },
        {
          provide: ConfigService,
          useValue: mockedConfigService,
        },
        {
          provide: JwtService,
          useValue: mockedJwtService,
        },
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {},
        },
      ],
    }).compile();
    authProvider = await module.get(AuthProvider);
  });
  describe('when creating a cookie', () => {
    it('should return a string', () => {
      const userId = 'skfdfhas3284bssd';
      expect(typeof authProvider.getCookieWithJwtToken(userId)).toEqual(
        'string',
      );
    });
  });
});
