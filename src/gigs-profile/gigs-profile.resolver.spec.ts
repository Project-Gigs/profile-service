import { Test, TestingModule } from '@nestjs/testing';
import { GigsProfileResolver } from './gigs-profile.resolver';
import { GigsProfileService } from './gigs-profile.service';

describe('GigsProfileResolver', () => {
  let resolver: GigsProfileResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GigsProfileResolver, GigsProfileService],
    }).compile();

    resolver = module.get<GigsProfileResolver>(GigsProfileResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
