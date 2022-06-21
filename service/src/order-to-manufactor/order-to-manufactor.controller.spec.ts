import { Test, TestingModule } from '@nestjs/testing';
import { OrderToManufactorController } from './order-to-manufactor.controller';
import { OrderToManufactorService } from './order-to-manufactor.service';

describe('OrderToManufactorController', () => {
  let controller: OrderToManufactorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderToManufactorController],
      providers: [OrderToManufactorService],
    }).compile();

    controller = module.get<OrderToManufactorController>(OrderToManufactorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
