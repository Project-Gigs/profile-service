import { CreateUserGigsInput } from './create-user-gigs.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserGigsInput extends PartialType(CreateUserGigsInput) {
  @Field(() => Int)
  id: number;
}
