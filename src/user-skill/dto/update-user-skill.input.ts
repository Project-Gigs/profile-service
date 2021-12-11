import { CreateUserSkillInput } from './create-user-skill.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserSkillInput extends PartialType(CreateUserSkillInput) {
  @Field(() => Int)
  id: number;
}
