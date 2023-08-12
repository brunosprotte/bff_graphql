import { Test, TestingModule } from '@nestjs/testing';
import { OrderItensResolver } from './order-itens.resolver';
import { OrderItensService } from './order-itens.service';

describe('OrderItensResolver', () => {
  let resolver: OrderItensResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderItensResolver, OrderItensService],
    }).compile();

    resolver = module.get<OrderItensResolver>(OrderItensResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
