import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm'

// ---

import { Customer } from '../../customer/entities/customer.entity'
import { Product } from '../../product/entities/product.entity'

// ---

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  public id!: number

  @Column({ type: 'varchar', length: 120, nullable: false })
  public name: string

  @ManyToOne(() => Customer, (customer) => customer.projects, { nullable : false})
  public customer: string

  @Column({ type: 'float' , nullable: true })
  public lng: number

  @Column({ type: 'float' , nullable : true })
  public lat: number

  @Column({ type: 'text' , nullable: true})
  public description: string

  @Column({
    type: 'varchar',
    nullable: true
  })
  public components_list: string

  @Column({ type: 'varchar' , nullable: false})
  public construction_date : string

  @Column({
    type: 'enum',
    enum: ['requested', 'in-progress', 'in-active', 'finished'],
    default : 'requested',
    nullable: false
  })
  public status: string

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  public createdAt!: Date

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date
}
