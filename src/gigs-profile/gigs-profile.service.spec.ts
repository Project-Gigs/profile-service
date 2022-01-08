import { Test, TestingModule } from '@nestjs/testing';
import { GigsProfileService } from './gigs-profile.service';

describe('GigsProfileService', () => {
  let service: GigsProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GigsProfileService],
    }).compile();

    service = module.get<GigsProfileService>(GigsProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
