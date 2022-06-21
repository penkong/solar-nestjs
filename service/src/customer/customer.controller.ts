import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
  BadGatewayException,
  BadRequestException
} from '@nestjs/common'

// ---

import { CustomerService } from './customer.service'
import { Customer } from './entities/customer.entity'
import { CreateCustomerDto } from './dto/create-customer.dto'
import { UpdateCustomerDto } from './dto/update-customer.dto'

// ---

@Controller('v1/api/customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async create(
    @Body() createCustomerDto: CreateCustomerDto
  ): Promise<Customer> {
    try {
      // input checking ...
      return await this.customerService.create(createCustomerDto)
    } catch (error) {
      if (error.message === 'Customer already exists') {
        throw new BadRequestException(error.message)
      } else throw new BadGatewayException(error.message)
    }
  }

  @Get()
  findAll() {
    try {
      return this.customerService.findAll()
    } catch (error) {
      throw new BadGatewayException(error)
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.customerService.findOne(+id)
    } catch (error) {
      throw new BadGatewayException(error)
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto
  ) {
    try {
      return this.customerService.update(+id, updateCustomerDto)
    } catch (error) {
      throw new BadGatewayException(error)
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    try {
      const el = await this.customerService.remove(+id)
      if (el.affected > 1) {
        return { message: 'success' }
      } else {
        return { message: '' }
      }
    } catch (error) {
      throw new BadGatewayException(error)
    }
  }
}
