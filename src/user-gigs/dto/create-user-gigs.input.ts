import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserGigsInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
