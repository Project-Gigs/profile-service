import { Module } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { UserProfileResolver } from './user-profile.resolver';

@Module({
  providers: [UserProfileResolver, UserProfileService],
})
export class UserProfileModule {}
