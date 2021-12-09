import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserSkillService } from './user-skill.service';
import { UserSkill } from './entities/user-skill.entity';
import { CreateUserSkillInput } from './dto/create-user-skill.input';
import { UpdateUserSkillInput } from './dto/update-user-skill.input';

@Resolver(() => UserSkill)
export class UserSkillResolver {
  constructor(private readonly userSkillService: UserSkillService) {}

  @Mutation(() => UserSkill)
  createUserSkill(@Args('createUserSkillInput') createUserSkillInput: CreateUserSkillInput) {
    return this.userSkillService.create(createUserSkillInput);
  }

  @Query(() => [UserSkill], { name: 'userSkill' })
  findAll() {
    return this.userSkillService.findAll();
  }

  @Query(() => UserSkill, { name: 'userSkill' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userSkillService.findOne(id);
  }

  @Mutation(() => UserSkill)
  updateUserSkill(@Args('updateUserSkillInput') updateUserSkillInput: UpdateUserSkillInput) {
    return this.userSkillService.update(updateUserSkillInput.id, updateUserSkillInput);
  }

  @Mutation(() => UserSkill)
  removeUserSkill(@Args('id', { type: () => Int }) id: number) {
    return this.userSkillService.remove(id);
  }
}
