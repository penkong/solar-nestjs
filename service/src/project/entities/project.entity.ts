import { Customer } from '../../customer/entities/customer.entity'
import { Product } from '../../product/entities/product.entity'
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
export class Project {
  @PrimaryGeneratedColumn()
  public id!: number

  @Column({ type: 'varchar', length: 120, nullable: false })
  public name: string

  @ManyToOne(() => Customer, (customer) => customer.projects)
  public customer: string

  @Column({ type: 'float' })
  public lng: number

  @Column({ type: 'float' })
  public lat: number

  @Column({ type: 'text' })
  public description: string

  @Column({
    type: 'jsonb',
    nullable: false
  })
  public components_list: { [key: Product['id']]: number }

  @Column({
    type: 'enum',
    enum: ['requested', 'in-progress', 'in-active', 'finished'],
    nullable: false
  })
  public status: string

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  public createdAt!: Date

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date
}
