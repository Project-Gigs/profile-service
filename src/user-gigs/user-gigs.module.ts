import { Module } from '@nestjs/common';
import { UserGigsService } from './user-gigs.service';
import { UserGigsResolver } from './user-gigs.resolver';

@Module({
  providers: [UserGigsResolver, UserGigsService],
})
export class UserGigsModule {}
