import { CreateUserGigInput } from './create-user-gig.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserGigInput extends PartialType(CreateUserGigInput) {
  @Field(() => Int)
  id: number;
}
