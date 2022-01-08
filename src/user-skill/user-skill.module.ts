import { Module } from '@nestjs/common';
import { UserSkillService } from './user-skill.service';
import { UserSkillResolver } from './user-skill.resolver';

@Module({
  providers: [UserSkillResolver, UserSkillService],
})
export class UserSkillModule {}
