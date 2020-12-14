import { AuthProvider } from '@auth/auth.provider';
import { Test } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { getRepositoryToken } from '@nestjs/typeorm';
import UserEntity from '@persistence/user/user.entity';
import mockedConfigService from '@utils/mocks/config.service';
import mockedJwtService from '@utils/mocks/jwt.service';
import * as bcrypt from 'bcrypt';
import mockedUser from './user.mock';
import { UserRepository } from '@persistence/user/repository';

jest.mock('bcrypt');

describe('The AuthenticationService', () => {
  let authProvider: AuthProvider;
  let userRepo: UserRepository;
  let bcryptCompare: jest.Mock;
  let userData: UserEntity;
  let findUser: jest.Mock;
  beforeEach(async () => {
    userData = {
      ...mockedUser,
    };
    findUser = jest.fn().mockResolvedValue(userData);
    const usersRepository = {
      findOne: findUser,
    };

    bcryptCompare = jest.fn().mockReturnValue(true);
    (bcrypt.compare as jest.Mock) = bcryptCompare;

    const module = await Test.createTestingModule({
      providers: [
        UserRepository,
        AuthProvider,
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
          useValue: usersRepository,
        },
      ],
    }).compile();
    authProvider = await module.get(AuthProvider);
    userRepo = await module.get(UserRepository);
  });
  describe('when accessing the data of authenticating user', () => {
    it('should attempt to get a user by email', async () => {
      const getByEmailSpy = jest.spyOn(userRepo, 'getByEmail');
      await authProvider.getAuthenticatedUser(
        'user@email.com',
        'strongPassword',
      );
      expect(getByEmailSpy).toBeCalledTimes(1);
    });
    describe('and the provided password is not valid', () => {
      beforeEach(() => {
        bcryptCompare.mockReturnValue(false);
      });
      it('should throw an error', async () => {
        await expect(
          authProvider.getAuthenticatedUser('user@email.com', 'strongPassword'),
        ).rejects.toThrow();
      });
    });
    describe('and the provided password is valid', () => {
      beforeEach(() => {
        bcryptCompare.mockReturnValue(true);
      });
      describe('and the user is found in the database', () => {
        beforeEach(() => {
          findUser.mockResolvedValue(userData);
        });
        it('should return the user data', async () => {
          const user = await authProvider.getAuthenticatedUser(
            'user@email.com',
            'strongPassword',
          );
          expect(user).toBe(userData);
        });
      });
      describe('and the user is not found in the database', () => {
        beforeEach(() => {
          findUser.mockResolvedValue(undefined);
        });
        it('should throw an error', async () => {
          await expect(
            authProvider.getAuthenticatedUser(
              'user@email.com',
              'strongPassword',
            ),
          ).rejects.toThrow();
        });
      });
    });
  });
});
