import { CreateOrderItenInput } from './create-order-iten.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderItenInput extends PartialType(CreateOrderItenInput) {
  @Field(() => Int)
  id: number;
}
