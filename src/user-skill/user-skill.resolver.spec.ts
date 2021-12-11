import { Test, TestingModule } from '@nestjs/testing';
import { UserSkillResolver } from './user-skill.resolver';
import { UserSkillService } from './user-skill.service';

describe('UserSkillResolver', () => {
  let resolver: UserSkillResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserSkillResolver, UserSkillService],
    }).compile();

    resolver = module.get<UserSkillResolver>(UserSkillResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
