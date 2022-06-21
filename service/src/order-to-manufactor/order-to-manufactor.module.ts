import { Module } from '@nestjs/common';
import { OrderToManufactorService } from './order-to-manufactor.service';
import { OrderToManufactorController } from './order-to-manufactor.controller';

@Module({
  controllers: [OrderToManufactorController],
  providers: [OrderToManufactorService]
})
export class OrderToManufactorModule {}
