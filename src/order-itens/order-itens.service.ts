import { Injectable } from '@nestjs/common';
import { CreateOrderItenInput } from './dto/create-order-iten.input';
import { UpdateOrderItenInput } from './dto/update-order-iten.input';
import { OrderItensClient } from '../client/order-itens/order-itens.client';

@Injectable()
export class OrderItensService {

  constructor(private readonly orderItensClient: OrderItensClient) {}

  create(createOrderItenInput: CreateOrderItenInput) {
    return 'This action adds a new orderIten';
  }

  findAll(orderId: string) {
    console.log("[OrderItensService] [findAll]")
    return this.orderItensClient.getOrderItens(orderId);
  }

  findOne(id: number) {
    return `This action returns a #${id} orderIten`;
  }

  update(id: number, updateOrderItenInput: UpdateOrderItenInput) {
    return `This action updates a #${id} orderIten`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderIten`;
  }
}
