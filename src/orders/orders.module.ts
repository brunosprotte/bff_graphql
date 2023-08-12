import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { OrderClient } from '../client/order/order.client';
import { OrderItensService } from 'src/order-itens/order-itens.service';
import { OrderItensClient } from 'src/client/order-itens/order-itens.client';

@Module({
  providers: [OrdersResolver, OrdersService, OrderClient, OrderItensService, OrderItensClient],
})
export class OrdersModule {}
