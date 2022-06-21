import { Project } from '../../project/entities/project.entity'
import { Product } from '../../product/entities/product.entity'
import { Customer } from '../../customer/entities/customer.entity'
import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne
} from 'typeorm'

// ---

@Entity()
export class OrderToManufactor {
  @PrimaryGeneratedColumn()
  public id!: number

  @Column({ type: 'varchar', length: 120, nullable: false })
  public customer: string

  @Column({ type: 'varchar', length: 120, nullable: false })
  public product: string

  @Column({ type: 'varchar', length: 120, nullable: false })
  public project: string
  
  @Column({
    type: 'enum',
    enum: ['waiting', 'success', 'failed'],
    nullable: false,
    default: 'waiting'
  })
  public status: string

  @Column({ type: 'text' })
  public description: string

  @Column({ type: 'jsonb', nullable: false })
  public order_response: object

  @Column({ type: 'boolean', default: false })
  public is_deleted: boolean

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  public createdAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date
}
