import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderItensService } from './order-itens.service';
import { OrderIten } from './entities/order-iten.entity';
import { CreateOrderItenInput } from './dto/create-order-iten.input';
import { UpdateOrderItenInput } from './dto/update-order-iten.input';

@Resolver(() => OrderIten)
export class OrderItensResolver {
  constructor(private readonly orderItensService: OrderItensService) {}

  @Mutation(() => OrderIten)
  createOrderIten(@Args('createOrderItenInput') createOrderItenInput: CreateOrderItenInput) {
    return this.orderItensService.create(createOrderItenInput);
  }

  @Query(() => [OrderIten], { name: 'orderItens' })
  findAll(orderId: string) {
    return this.orderItensService.findAll(orderId);
  }

  @Query(() => OrderIten, { name: 'orderIten' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.orderItensService.findOne(id);
  }

  @Mutation(() => OrderIten)
  updateOrderIten(@Args('updateOrderItenInput') updateOrderItenInput: UpdateOrderItenInput) {
    return this.orderItensService.update(updateOrderItenInput.id, updateOrderItenInput);
  }

  @Mutation(() => OrderIten)
  removeOrderIten(@Args('id', { type: () => Int }) id: number) {
    return this.orderItensService.remove(id);
  }
}
