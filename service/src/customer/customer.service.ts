import { DeleteResult, Repository, UpdateResult } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BadRequestException, Injectable, Logger } from '@nestjs/common'

// ---

import { Customer } from './entities/customer.entity'
import { CreateCustomerDto } from './dto/create-customer.dto'
import { UpdateCustomerDto } from './dto/update-customer.dto'

// ---

@Injectable()
export class CustomerService {
  private readonly logger = new Logger(CustomerService.name)

  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    try {
      // input checking ...
      const existingCustomer = await this.customerRepository.find({
        where: { email: createCustomerDto.email }
      })

      console.log(existingCustomer)

      if (existingCustomer.length > 0) {
        if (existingCustomer[0].is_deleted) {
          existingCustomer[0].is_deleted = false
          return await this.customerRepository.save(existingCustomer[0])
        } else throw new Error('Customer already exists')
      }
      const customer = this.customerRepository.create(createCustomerDto)
      return await this.customerRepository.save(customer)
    } catch (error) {
      throw error
    }
  }

  async findAll(): Promise<Customer[]> {
    try {
      return await this.customerRepository.find({
        where: { is_deleted: false }
      })
    } catch (error) {
      throw error.detail
    }
  }

  async findOne(id: number): Promise<Customer> {
    try {
      // input checking ...
      return await this.customerRepository.findOne({ where: { id } })
    } catch (error) {
      throw error.detail
    }
  }

  async update(
    id: number,
    updateCustomerDto: UpdateCustomerDto
  ): Promise<Customer> {
    try {
      // input checking ...
      const customer = await this.findOne(id)
      if (!customer.id) throw new Error('Customer not found')
      // input checking ...
      return await this.customerRepository.save({
        ...customer,
        ...updateCustomerDto
      })
    } catch (error) {
      throw error.detail
    }
  }

  async remove(id: number): Promise<UpdateResult> {
    try {
      // input checking ...
      return this.customerRepository.update({ id }, { is_deleted: true })
    } catch (error) {
      throw error.detail
    }
  }
}
