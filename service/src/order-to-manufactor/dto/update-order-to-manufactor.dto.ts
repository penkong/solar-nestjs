import { PartialType } from '@nestjs/mapped-types'
import { CreateOrderToManufactorDto } from './create-order-to-manufactor.dto'

export class UpdateOrderToManufactorDto extends PartialType(
  CreateOrderToManufactorDto
) {}
