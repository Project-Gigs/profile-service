import { Test, TestingModule } from '@nestjs/testing';
import { UserProfileResolver } from './user-profile.resolver';
import { UserProfileService } from './user-profile.service';

describe('UserProfileResolver', () => {
  let resolver: UserProfileResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserProfileResolver, UserProfileService],
    }).compile();

    resolver = module.get<UserProfileResolver>(UserProfileResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
