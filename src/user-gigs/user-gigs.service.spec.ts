import { Test, TestingModule } from '@nestjs/testing';
import { UserGigsService } from './user-gigs.service';

describe('UserGigsService', () => {
  let service: UserGigsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserGigsService],
    }).compile();

    service = module.get<UserGigsService>(UserGigsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
