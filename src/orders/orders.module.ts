import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { OrderClient } from '../client/order/order.client';

@Module({
  providers: [OrdersResolver, OrdersService, OrderClient],
})
export class OrdersModule {}
