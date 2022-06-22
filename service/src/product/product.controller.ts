import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
} from '@nestjs/common'

// ---

import { ProductService } from './product.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'

// ---

@Controller('v1/api/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    try {
      return this.productService.create(createProductDto)
    } catch (error) {
      throw error
    }
  }

  @Get()
  findAll() {
    try {
      return this.productService.findAll()
    } catch (error) {
      throw error
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.productService.findOne(+id)
      
    } catch (error) {
      throw error
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    try {
      return this.productService.update(+id, updateProductDto)
      
    } catch (error) {
      throw error
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.productService.remove(+id)
    } catch (error) {
      throw error
    }
  }
}
