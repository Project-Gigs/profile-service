import { Test, TestingModule } from '@nestjs/testing';
import { UserGigsResolver } from './user-gigs.resolver';
import { UserGigsService } from './user-gigs.service';

describe('UserGigsResolver', () => {
  let resolver: UserGigsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserGigsResolver, UserGigsService],
    }).compile();

    resolver = module.get<UserGigsResolver>(UserGigsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
