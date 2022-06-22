import { Repository } from 'typeorm'
import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

// ---

import { Product } from './entities/product.entity'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'

// ---

@Injectable()
export class ProductService {
  private readonly logger = new Logger(ProductService.name)

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const existingProduct = await this.productRepository.find({
        where: {
          component: createProductDto.component,
          model: createProductDto.model,
          manufactor: createProductDto.manufactor
        }
      })

      if (existingProduct.length > 0) {
        throw new Error('Product already exists')
      }

      const product = this.productRepository.create(createProductDto)
      return await this.productRepository.save(product)
    } catch (error) {
      throw error
    }
  }

  async findAll(): Promise<Product[]> {
    try {
      return await this.productRepository.find()
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number): Promise<Product> {
    try {
      return await this.productRepository.findOne({ where: { id } })
    } catch (error) {
      throw error
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const product = await this.findOne(id)
      if (!product.id) throw new Error('Product not found')
      const item = {
        ...product,
        ...updateProductDto
      }

      console.log(item)
      return await this.productRepository.save(item)
    } catch (error) {
      throw error
    }
  }

  async remove(id: number) {
    try {
      return await this.productRepository.delete(id)
    } catch (error) {
      throw error
    }
  }

  async removeAll() {
    try {
      return await this.productRepository.clear()
    } catch (error) {
      throw error
    }
  }
}
