import { Test, TestingModule } from '@nestjs/testing';
import { OrderToManufactorService } from './order-to-manufactor.service';

describe('OrderToManufactorService', () => {
  let service: OrderToManufactorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderToManufactorService],
    }).compile();

    service = module.get<OrderToManufactorService>(OrderToManufactorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
