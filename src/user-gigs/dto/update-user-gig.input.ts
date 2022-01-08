import { CreateUserGigsInput } from './create-user-gig.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserGigsInput extends PartialType(CreateUserGigsInput) {
  @Field(() => Int)
  id: number;
}
