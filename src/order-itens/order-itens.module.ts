import { Module } from '@nestjs/common';
import { OrderItensService } from './order-itens.service';
import { OrderItensResolver } from './order-itens.resolver';
import { OrderItensClient } from '../client/order-itens/order-itens.client';

@Module({
  providers: [OrderItensResolver, OrderItensService, OrderItensClient],
})
export class OrderItensModule {}
