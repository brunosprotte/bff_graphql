import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { OrderClient } from '../client/order/order.client';
import { FilterDTO } from '../dto/query.dto';

@Injectable()
export class OrdersService {

  constructor(private readonly orderClient: OrderClient) {}

  create(createOrderInput: CreateOrderInput) {
    return 'This action adds a new order';
  }

  findAll(query: FilterDTO) {
    return this.orderClient.getOrders(query);
  }

  findOne(id: string) {
    return this.orderClient.getById(id);
  }

  update(id: number, updateOrderInput: UpdateOrderInput) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
