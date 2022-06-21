import { Injectable, Logger } from '@nestjs/common'

// ---

import { CreateOrderToManufactorDto } from './dto/create-order-to-manufactor.dto'
import { UpdateOrderToManufactorDto } from './dto/update-order-to-manufactor.dto'

// ---

@Injectable()
export class OrderToManufactorService {
  private readonly logger = new Logger(OrderToManufactorService.name)

  create(createOrderToManufactorDto: CreateOrderToManufactorDto) {
    return 'This action adds a new orderToManufactor'
  }

  findAll() {
    return `This action returns all orderToManufactor`
  }

  findOne(id: number) {
    return `This action returns a #${id} orderToManufactor`
  }

  update(id: number, updateOrderToManufactorDto: UpdateOrderToManufactorDto) {
    return `This action updates a #${id} orderToManufactor`
  }

  remove(id: number) {
    return `This action removes a #${id} orderToManufactor`
  }
}
