import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderToManufactorService } from './order-to-manufactor.service';
import { CreateOrderToManufactorDto } from './dto/create-order-to-manufactor.dto';
import { UpdateOrderToManufactorDto } from './dto/update-order-to-manufactor.dto';

@Controller('order-to-manufactor')
export class OrderToManufactorController {
  constructor(private readonly orderToManufactorService: OrderToManufactorService) {}

  @Post()
  create(@Body() createOrderToManufactorDto: CreateOrderToManufactorDto) {
    return this.orderToManufactorService.create(createOrderToManufactorDto);
  }

  @Get()
  findAll() {
    return this.orderToManufactorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderToManufactorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderToManufactorDto: UpdateOrderToManufactorDto) {
    return this.orderToManufactorService.update(+id, updateOrderToManufactorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderToManufactorService.remove(+id);
  }
}
