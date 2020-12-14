import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserRepository } from '../repository';
import UserEntity from '../user.entity';

describe('The UsersRepository', () => {
  let usersRepo: UserRepository;
  let findOne: jest.Mock;
  beforeEach(async () => {
    findOne = jest.fn();
    const module = await Test.createTestingModule({
      providers: [
        UserRepository,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            findOne,
          },
        },
      ],
    }).compile();
    usersRepo = await module.get(UserRepository);
  });
  describe('when getting a user by email', () => {
    describe('and the user is matched', () => {
      let user: UserEntity;
      beforeEach(() => {
        user = new UserEntity();
        findOne.mockReturnValue(Promise.resolve(user));
      });
      it('should return the user', async () => {
        const fetchedUser = await usersRepo.getByEmail('test@test.com');
        expect(fetchedUser).toEqual(user);
      });
    });
    describe('and the user is not matched', () => {
      beforeEach(() => {
        findOne.mockReturnValue(undefined);
      });
      it('should throw an error', async () => {
        await expect(usersRepo.getByEmail('test@test.com')).rejects.toThrow();
      });
    });
  });
});
