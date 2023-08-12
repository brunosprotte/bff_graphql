import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderItenInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
