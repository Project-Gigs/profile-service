import { Module } from '@nestjs/common';
import { GigsProfileService } from './gigs-profile.service';
import { GigsProfileResolver } from './gigs-profile.resolver';

@Module({
  providers: [GigsProfileResolver, GigsProfileService]
})
export class GigsProfileModule {}
