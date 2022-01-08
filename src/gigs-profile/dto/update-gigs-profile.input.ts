import { CreateGigsProfileInput } from './create-gigs-profile.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGigsProfileInput extends PartialType(
  CreateGigsProfileInput,
) {
  @Field(() => Int)
  id: number;
}
