import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Item, Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { FilterDTO } from '../dto/query.dto';
import { OrderItensService } from '../order-itens/order-itens.service';

@Resolver(() => Order)
export class OrdersResolver {
  
  constructor(
    private readonly ordersService: OrdersService,
    private readonly orderItensService: OrderItensService
  ) {}

  @Mutation(() => Order)
  createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    return this.ordersService.create(createOrderInput);
  }

  @Query(() => [Order], { name: 'orders' })
  findAll(@Args('filter') filter: FilterDTO) {
    console.log(filter)
    return this.ordersService.findAll(filter);
  }

  @Query(() => Order, { name: 'order' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.ordersService.findOne(id);
  }

  @Mutation(() => Order)
  updateOrder(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    return this.ordersService.update(updateOrderInput.id, updateOrderInput);
  }

  @Mutation(() => Order)
  removeOrder(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.remove(id);
  }

  @ResolveField('itens', () => [Item])
  async getOrderItens(@Parent() order: Order) {
    const { id } = order;
    return this.orderItensService.findAll(id)
  }

}
